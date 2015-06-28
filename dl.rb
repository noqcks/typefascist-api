# require 'net/http'

# Must be somedomain.net instead of somedomain.net/, otherwise, it will throw exception.
# Net::HTTP.start("somedomain.net") do |http|
#     resp = http.get("/flv/sample/sample.flv")
#     open("sample.flv", "wb") do |file|
#         file.write(resp.body)
#     end
# end

# puts "Done."

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