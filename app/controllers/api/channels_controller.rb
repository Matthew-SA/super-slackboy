class Api::ChannelsController < ApplicationController
  def index # √√ view all public channels (for channel browser)
    @channels = Channel.where(direct_message: false)
    render :index
  end
  
  def show # view a channel and its connected messages.
    @channel = Channel.find(params[:id])
    @membership = Membership.find_by(user_id: current_user.id, channel_id: params[:id])
    if @channel.direct_message 
      if @membership
        @messages = @channel.messages.includes(:user)
      end
    else
      @messages = @channel.messages.includes(:user)
    end
    render :show
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end