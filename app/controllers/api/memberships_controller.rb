class Api::MembershipsController < ApplicationController
  def index
    @memberships = current_user.memberships.includes(:channel)
    render 'api/memberships/index'
  end

  def update
    @timestamp = DateTime.now
    @old_focus = current_user.focus.to_i

    if @old_focus != 0
      @oldmembership = Membership.find_by(channel_id: @old_focus, user_id: current_user.id)
      @oldmembership.update(last_read: @timestamp)
    end

    @membership = Membership.find_by(id: params[:id], user_id: current_user.id)
    @focus = @membership.channel_id.to_s
    current_user.update(focus: @focus)
    render 'api/memberships/show'
  end

  def create
    @membership = Membership.new(user_id: current_user.id, channel_id: params[:channelId], last_read: DateTime.now)
    if @membership.save
      render 'api/memberships/show'
    end
  end
end
