var cmd = require('child_process');

module.exports =
{
  ////////////////
  /// TO WOFF ////
  ////////////////
  // woff1_compress = sfnt2woff // 


  otf_to_woff: function(filePath){
    cmd.spawnSync('./convertors/woff1/woff1_compress', [filePath]);
  },

  ttf_to_woff: function(filePath){
    cmd.spawnSync('./convertors/woff1/woff1_compress', [filePath]);
  },


  /////////////////
  /// TO WOFF2 ////
  /////////////////


  otf_to_woff2: function(filePath){
    cmd.spawnSync('./convertors/woff/woff2_compress', [filePath]);
  },

  ttf_to_woff2: function(filePath){
    cmd.spawnSync('./convertors/woff/woff2_compress', [filePath]);
  },


  /////////////////
  //// TO TTF /////
  /////////////////


  woff2_to_ttf: function(filePath){
    cmd.spawnSync('./convertors/woff/woff2_decompress', [filePath]);
  }
};