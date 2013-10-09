require "sinatra/base"
require "sinatra/config_file"

class AlabamaTracts < Sinatra::Base
  register Sinatra::ConfigFile
  config_file 'config/config.yml'

  set :public_folder => "public", :static => true

  get "/" do
    # @mapquest_key = settings.mapquest_key
    haml :index
  end

end
