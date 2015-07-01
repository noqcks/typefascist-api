'use strict';

var express = require('express');
var multer = require('multer');

var converted_file_path;
var original_file_path;
// var filePath;

var done = false;
var uploaded = false;

var convert_to = 'woff2';
var convert_from;

var cmd = require('child_process');
var app = express();

var convert = require('./lib/convert');

app.use(multer({ dest: 'uploads',
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },

  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },

  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
    convert_from = file.extension;
    original_file_path = file.path;
    uploaded = true;
  }
}));

app.post('/files',function(req, res) {
  convert_to = req.body.format;

  if(uploaded === true){
    if(convert_to === undefined) convert_to = 'woff2';
    var font = convert_from + '_to_' + convert_to;
    try {
      convert[font](original_file_path);
      cleanup_files()
    }
    catch(err) {
      res.end('That conversion is not supported');
      name_old_file(original_file_path);
      remove_file_sync(original_file_path);
    }
  }

  if (done === true) {
    res.sendFile(converted_file_path, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', converted_file_path);
        res.status('200').end();
        // remove the font files
        remove_file_sync(converted_file_path);
        name_old_file(original_file_path);
        remove_file_sync(original_file_path);
      }
    });
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


////////////////////////
/// HELPER FUNCTIONS ///
////////////////////////
// (should probably reference these as modules from another file) // 

function cleanup_files()
{
  // give the files absolute paths
  name_new_file(original_file_path);

  // change permissions on converted file so we can send it in response body
  chmod_file_sync(converted_file_path);
  done = true;
}


function name_old_file(file){
  original_file_path = __dirname + '/' + file;
}


function name_new_file(file){
  converted_file_path = __dirname + '/' + file.replace(convert_from, convert_to);
}


function remove_file_sync(file){
  cmd.spawnSync('rm', ['-rf', file]);
}

function chmod_file_sync(file){
  require('fs').chmod(file, '0777', function(err){
    if(err) return err;
  });
}