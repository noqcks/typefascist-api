require 'unirest'


response = Unirest.post "http://localhost:3000/files",
  # headers:{
  #   "X-Mashape-Key" => "hTHPqoMddemshEQSLD9Zj6HebEb0p1qAo7kjsnJT9ArgWSd2tz"
  # },
  parameters:{
    "file" => File.new("./fonts/CooperBlack/CooperBlackStd-Italic.otf")
    # "format" => "woff",
    # "output" => "tar.gz"
  }

  open('Cooper.woff2', 'wb') do |file|
    file.write(response.body);
  end