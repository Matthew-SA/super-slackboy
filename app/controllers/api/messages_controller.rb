class Api::MessagesController < ApplicationController

  def index
    channels = current_user.channels.ids
    @messages = Message.all.includes(:user).where(channel_id: channels)
    render '/api/messages/index'
  end

end
