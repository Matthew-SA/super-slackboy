class Api::MessagesController < ApplicationController

  def index
    # if params['type'] == 'init'
    #   channels = current_user.channels.ids
    #   @messages = Message.where(channel_id: channels).includes(:user)
    # else
      @messages = Message.where(channel_id: params['type']).includes(:user)
    # end
    # debugger
    render '/api/messages/index'
  end

end
