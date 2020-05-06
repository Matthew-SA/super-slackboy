class Api::MembershipsController < ApplicationController
  def index
    @memberships = Membership.where(user_id: current_user.id).includes(:channel)
    render 'api/memberships/index'
  end

  def update
    @membership = Membership.find_by(id: params[:id], user_id: current_user.id)
    @membership.last_accessed = DateTime.now
    @membership.save
    current_user.current_channel = @membership.channel_id
    @current_user.save
    render 'api/memberships/show'
  end
end
