'use strict';

var express = require('express');
var multer = require('multer');

var new_file_path;
var old_file_path;
var font_type_not_supported;
var done = false;

var cmd = require('child_process');
var app = express();

var convert = require('./lib/convert.js');

////////////////////////////////////////////////////////////////////////

// TODO: 
// 1. allow option for format to convert to
// req.body.format
// 2. allow option for format to output file as
// req.body.output
// 3. authorize access using the API key from mashape
// console.log(req.headers['x-mashape-key']);
// ---- DONE ----- 4. return error for files that arent woff, otf, ttf etc

// extensions to convert from:
// afm, bin, cff, dfont, eot, otf, pdf, pfa, pfb, pfm, ps, pt3, suit, svg, t11, t42, tfm, ttc, ttf, woff, woff2

// extensions to convert to:
// afm, bin, cff, dfont, eot, otf, pfa, pfb, pfm, ps, pt3, suit, svg, t11, t42, tfm, ttc, ttf, woff, woff2, ufo

////////////////////////////////////////////////////////////////////////

app.use(multer({ dest: 'uploads',
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },

  onFileUploadStart: function (file) {
    if(!supported_font_type(file.extension)){
      font_type_not_supported = true;
    }
    console.log(file.originalname + ' is starting ...');
  },

  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
    // conversion(file.extension);
    old_file_path = file.path;
  }
}));


app.post('/files',function(req,res) {

  convert_to = req.body.format;
  convert_font(convert_to);

  if(font_type_not_supported === true){
    res.end('font type not supported')
  }

  if(done === true){
    console.log(req.files);
    res.sendFile(new_file_path, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', new_file_path);
        res.status('200').end();
        remove_file_sync(new_file_path);
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


function conversion(format_from, format_to, filePath){
  try {
    var format = format_from + '_to_' + format_to
    convert.format(filePath)
  }
  catch(err){
    console.log('That conversion is not supported');
  }
}


function name_old_file(file){
  old_file_path = __dirname + '/' + file;
}


function name_new_file(file){
  new_file_path = __dirname + '/' + file.replace('.otf', '.woff2');
}


function remove_file_sync(filePath){
  cmd.spawnSync('rm', ['-rf', filePath]);
}


function chmod_file_sync(filePath){
  require('fs').chmod(filePath, '0777', function(err){
    if(err) return err;
  });
}
