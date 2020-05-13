class Api::ChannelsController < ApplicationController
  def index
    @memberships = Membership.where(user_id: current_user.id).includes(:channel)
    render 'api/channels/index'
  end

  def create
    puts channel_params
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end
