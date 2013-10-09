require_relative "spec_helper"
require_relative "../mapbox_mq.rb"

def app
  AlabamaTracts
end

describe AlabamaTracts do
  it "responds with a welcome message" do
    get '/'

    last_response.body.must_include 'Welcome to the Sinatra Template!'
  end
end
