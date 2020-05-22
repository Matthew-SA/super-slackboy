class Api::MessagesController < ApplicationController

  def index
    channels = current_user.channels.ids
    @messages = Message.where(channel_id: channels).includes(:user)
    puts ActionCable.server.connections
    render '/api/messages/index'
  end

end
