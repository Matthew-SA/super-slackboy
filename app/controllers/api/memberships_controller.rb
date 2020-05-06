class Api::MembershipsController < ApplicationController
  def index
    @memberships = Membership.where(user_id: current_user.id).includes(:channel)
    render 'api/memberships/index'
  end
end
