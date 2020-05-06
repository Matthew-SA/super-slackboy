class Api::ChannelsController < ApplicationController
  def index
    @memberships = Membership.where(user_id: current_user.id).includes(:channel)
    # current_user.channels.includes(:memberships)
    # @channels = current_user.channels
    render 'api/channels/index'
  end
end
