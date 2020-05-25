class Api::MembershipsController < ApplicationController
  def index # OKAY (gets memberships and channels on load) - possibly add focus channel info.
    @memberships = current_user.memberships.includes(:channel)
    @channels = current_user.channels
    render :index
  end
  
  def create # ??? create membership to existing channel.  show new membership on completion
    @membership = Membership.create!(user_id: current_user.id, channel_id: params[:channelId], last_read: DateTime.now)
    render :show
  end


  def update
    @membership = Membership.find(params[:id])
    @membership.update(last_read: DateTime.now)
    render :show
  end

end