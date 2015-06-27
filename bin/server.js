var cmd = require('child_process');

var file_location = './fonts/CooperBlack/CooperBlackStd-italic.otf';
var font_location = './woff/woff2_compress';

cmd.spawn(font_location, [file_location]);
