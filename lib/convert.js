var cmd = require('child_process');


////////////////
/// TO WOFF ////
////////////////
// woff1_compress = sfnt2woff // 


exports.otf_to_woff = function(filePath){
  cmd.spawnSync(__dirname + '../convertors/woff1/woff1_compress', [filePath]);
}

exports.ttf_to_woff = function(filePath){
  cmd.spawnSync(__dirname + '../convertors/woff1/woff1_compress', [filePath]);
}


/////////////////
/// TO WOFF2 ////
/////////////////


exports.otf_to_woff2 = function(filePath){
  cmd.spawnSync(__dirname + '../convertors/woff/woff2_compress', [filePath]);
}

exports.ttf_to_woff2 = function(filePath){
  cmd.spawnSync(__dirname + '../convertors/woff/woff2_compress', [filePath]);
}


/////////////////
//// TO TTF /////
/////////////////


exports.woff2_to_ttf = function(filePath){
  cmd.spawnSync(__dirname + '../convertors/woff/woff2_decompress', [filePath]);
}