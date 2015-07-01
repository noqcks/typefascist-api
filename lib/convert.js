var cmd = require('child_process');

module.exports =
{
  ////////////////
  /// TO WOFF ////
  ////////////////

  otf_to_woff: function(file_path){
    cmd.spawnSync('./convertors/woff1/sfnt_to_woff', [file_path]);
  },

  ttf_to_woff: function(file_path){
    cmd.spawnSync('./convertors/woff1/sfnt_to_woff', [file_path]);
  },

  woff2_to_woff: function(file_path){
    cmd.spawnSync('./convertors/woff2/woff2_to_sfnt', [file_path]);
    var temp_file_path = file_path.replace('woff2', 'ttf');
    cmd.spawnSync('./convertors/woff1/sfnt_to_woff', [temp_file_path]);
  },

  /////////////////
  /// TO WOFF2 ////
  /////////////////

  otf_to_woff2: function(file_path){
    cmd.spawnSync('./convertors/woff2/sfnt_to_woff2', [file_path]);
  },

  ttf_to_woff2: function(file_path){
    cmd.spawnSync('./convertors/woff2/sfnt_to_woff2', [file_path]);
  },

  woff_to_woff2: function(file_path){
    var temp_file_path = file_path.replace('woff', 'otf');
    cmd.spawnSync('./convertors/woff1/woff_to_sfnt.py', [file_path, temp_file_path]);
    cmd.spawnSync('./convertors/woff2/sfnt_to_woff2', [temp_file_path]);
  },

  /////////////////
  //// TO TTF /////
  /////////////////

  woff2_to_ttf: function(file_path){
    cmd.spawnSync('./convertors/woff2/woff2_to_sfnt', [file_path]);
  },

  woff_to_ttf: function(file_path){
    var output_file_path = file_path.replace('woff', 'ttf');
    cmd.spawnSync('./convertors/woff1/woff_to_sfnt.py', [file_path, output_file_path]);
  },

  otf_to_ttf: function(file_path){
    cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--ttf']);
  },

  /////////////////
  //// TO OTF /////
  /////////////////

  woff_to_otf: function(file_path){
    var output_file_path = file_path.replace('woff', 'otf');
    cmd.spawnSync('./convertors/woff1/woff_to_sfnt.py', [file_path, output_file_path]);
  },

  woff2_to_otf: function(file_path){
    var temp_file_path = file_path.replace('woff2', 'ttf');
    cmd.spawnSync('./convertors/woff2/woff2_to_sfnt', [file_path]);
    cmd.spawnSync('./convertors/fontconvert.py', [temp_file_path, '--otf']);
  },

  ttf_to_otf: function(file_path){
    cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--otf']);
  }
};