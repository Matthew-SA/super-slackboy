class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels
    render 'api/channels/index'
  end
end
