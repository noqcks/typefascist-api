# require 'unirest'


# response = Unirest.post "http://localhost:3000/files",
#   # headers:{
#   #   "X-Mashape-Key" => "hTHPqoMddemshEQSLD9Zj6HebEb0p1qAo7kjsnJT9ArgWSd2tz"
#   # },
#   parameters:{
#     "file" => File.new("./fonts/gotham.ttf"),
#     "format" => "woff",
#     # "output" => "tar.gz"
#   }

#   open('gotham.woff', 'wb') do |file|
#     file.write(response.body);
#   end