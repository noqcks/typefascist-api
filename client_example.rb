require 'unirest'


response = Unirest.post "http://127.0.0.1:3000/convert",
  parameters:{
    "file" => File.new(ARGV[0]),
    "format" => "woff",
  }

open('font.woff', 'wb') do |file|
  file.write(response.body);
end