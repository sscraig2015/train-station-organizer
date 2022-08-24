class FallbackController < ActionController::Base
    def index
      render file: 'client/src/App.js'
    end
  end