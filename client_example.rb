require 'unirest'


response = Unirest.post "http://localhost:3000/convert",
  parameters:{
    "file" => File.new("gotham.ttf"),
    "format" => "woff",
  }

open('gotham.woff', 'wb') do |file|
  file.write(response.body);
end