class Api::MessagesController < ApplicationController

  def index # √
    channel = Channel.find(params[:channelId])

    if channel.direct_message
      if Membership.find_by(user_id: current_user.id, channel_id: params[:channelId])
        @messages = Message.where(channel_id: params[:channelId]).includes(:user)
      end
    else
      @messages = Message.where(channel_id: params[:channelId]).includes(:user)
    end
    render :index
  end

end
