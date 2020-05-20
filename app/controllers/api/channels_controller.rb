class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    current_user.update(focus: "channel_browser")
    render 'api/channels/index'
  end

  def create
    @timestamp = DateTime.now
    @channel = Channel.new(channel_params)
    @channel.last_message_posted = @timestamp

    if @channel.save
      @membership = Membership.create(user_id: current_user.id, channel_id: @channel.id, last_read: @timestamp)
      @focus = @channel.id.to_s
      current_user.update(focus: @focus)
      render 'api/channels/show'
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end
