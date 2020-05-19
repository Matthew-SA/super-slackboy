class Api::MembershipsController < ApplicationController
  def index
    @memberships = Membership.where(user_id: current_user.id).includes(:channel)
    render 'api/memberships/index'
  end

  def update
    time = DateTime.now

    @oldmembership = Membership.find_by(channel_id: current_user.current_channel, user_id: current_user.id)
    @oldmembership.last_departed = time
    @oldmembership.save

    @membership = Membership.find_by(id: params[:id], user_id: current_user.id)
    @membership.last_arrived = time
    @membership.save
    
    @focus = @membership.channel_id.to_s
    # @channel = Channel.find_by(id:)
    current_user.current_channel = @membership.channel_id
    current_user.focus = @focus
    current_user.save

    render 'api/memberships/show'
  end
end
