class Api::MessagesController < ApplicationController

  def # √
    channel = Channel.find(params[:id])
    if channel.direct_message
      if Membership.find_by(user_id: current_user.id, channel_id: params[:id])
        @message = channel.messages
      end
    else
      @messages = channel.messages
    end
    render :index
  end

end
