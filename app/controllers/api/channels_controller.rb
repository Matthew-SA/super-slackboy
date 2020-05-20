class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    render 'api/channels/index'
  end

  def create
    @timestamp = DateTime.now

    @channel = Channel.new(channel_params)
    @channel.last_message_posted = @timestamp
    @channel.save

    @membership = Membership.create(user_id: current_user.id, channel_id: @channel.id, last_read: @timestamp)

    @focus = @channel.id.to_s

    @user = current_user
    @user.focus = @focus
    @user.save
    render 'api/channels/show'
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end
