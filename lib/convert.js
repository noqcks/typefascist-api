var cmd = require('child_process');

module.exports =
{
  ////////////////
  /// TO WOFF ////
  ////////////////

  otf_to_woff: function(file_path){
    cmd.spawnSync('sfnt2woff', [file_path]);
  },

  ttf_to_woff: function(file_path){
    cmd.spawnSync('sfnt2woff', [file_path]);
  },

  woff2_to_woff: function(file_path){
    cmd.spawnSync('./convertors/woff2/woff2_to_sfnt', [file_path]);
    var temp_file_path = file_path.replace('woff2', 'ttf');
    cmd.spawnSync('sfnt2woff', [temp_file_path]);
  },

  // ufo_to_woff: function(file_path){
  //   cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--otf']);
  // },

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
    cmd.spawnSync('woff_to_sfnt', [file_path, temp_file_path]);
    cmd.spawnSync('./convertors/woff2/sfnt_to_woff2', [temp_file_path]);
  },

  // ufo_to_woff2: function(file_path){
  //   cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--otf']);
  // },

  /////////////////
  //// TO TTF /////
  /////////////////

  woff2_to_ttf: function(file_path){
    cmd.spawnSync('./convertors/woff2/woff2_to_sfnt', [file_path]);
  },

  woff_to_ttf: function(file_path){
    var output_file_path = file_path.replace('woff', 'ttf');
    cmd.spawnSync('woff_to_sfnt', [file_path, output_file_path]);
  },

  otf_to_ttf: function(file_path){
    cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--ttf']);
  },

  // ufo_to_ttf: function(file_path){
  //   cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--otf']);
  // },

  /////////////////
  //// TO OTF /////
  /////////////////

  woff_to_otf: function(file_path){
    var output_file_path = file_path.replace('woff', 'otf');
    cmd.spawnSync('woff_to_sfnt', [file_path, output_file_path]);
  },

  woff2_to_otf: function(file_path){
    var temp_file_path = file_path.replace('woff2', 'ttf');
    cmd.spawnSync('./convertors/woff2/woff2_to_sfnt', [file_path]);
    cmd.spawnSync('./convertors/fontconvert.py', [temp_file_path, '--otf']);
  },

  ttf_to_otf: function(file_path){
    cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--otf']);
  },

  // ufo_to_otf: function(file_path){
  //   cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--otf']);
  // },

  /////////////////
  //// TO UFO /////
  /////////////////

  // woff_to_ufo: function(file_path){
  //   cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--ufo']);
  // },

  // woff2_to_ufo: function(file_path){
  //   var temp_file_path = file_path.replace('woff2', 'ttf');
  //   cmd.spawnSync('./convertors/woff2/woff2_to_sfnt', [file_path]);
  //   cmd.spawnSync('./convertors/fontconvert.py', [temp_file_path, '--ufo']);
  // },

  // ttf_to_ufo: function(file_path){
  //   cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--ufo']);
  // },

  // otf_to_ufo: function(file_path){
  //   cmd.spawnSync('./convertors/fontconvert.py', [file_path, '--ufo']);
  // }
};