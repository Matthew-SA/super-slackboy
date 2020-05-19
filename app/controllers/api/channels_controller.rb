class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    render 'api/channels/index'
  end

  def create
    timestamp = DateTime.now

    @channel = Channel.new(channel_params)
    @channel.last_message_posted = timestamp
    @channel.save

    @membership = Membership.create(user_id: current_user.id, channel_id: @channel.id, last_arrived: timestamp, last_departed: timestamp)

    @focus = @channel.id.to_s

    @user = current_user
    @user.current_channel = @channel.id
    @user.focus = @focus
    @user.save
    render 'api/channels/show'
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end
