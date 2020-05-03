class Api::MessagesController < ApplicationController

  def index
    channel = current_user.current_channel
    @messages = Message.all.includes(:user).where(channel: channel)
    render '/api/messages/index'
  end

end
