var cmd = require('child_process');

exports.afm = function(){}
exports.bin = function(){}
exports.cff = function(){}
exports.dfont = function(){}  
exports.eot = function(){}
exports.otf = function(){}
exports.pfa = function(){}
exports.pfb = function(){}
exports.pfm = function(){}
exports.ps = function(){}
exports.pt3 = function(){}
exports.suit = function(){}
exports.svg = function(){}
exports.t11 = function(){}
exports.t42 = function(){}
exports.tfm = function(){}
exports.ttc = function(){}
exports.ttf = function(){}
exports.woff = function(){}

exports.woff2 = function(filePath){
  cmd.spawnSync(__dirname + '../woff/woff2_compress', [filePath]);
}