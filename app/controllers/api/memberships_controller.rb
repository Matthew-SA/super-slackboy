class Api::MembershipsController < ApplicationController
  def index # Get Memberships and connected channels on initial load
    @memberships = current_user.memberships.includes(:channel)
    @channels = current_user.channels
    @current_membership = current_user.current_membership
    render :index
  end
  
  def create # if channel is public, join user to channel
    @channel = Channel.find(params[:channelId])
    if !@channel.direct_message
      @membership = Membership.create!(user_id: current_user.id, channel_id: params[:channelId], last_read: DateTime.now)
      @current_membership = @membership.id
      render :show
    end
  end

  def update # updates when user last viewed a channel
    @membership = current_user.current_membership # get and return last_read membership
    @membership.update(last_read: DateTime.now)

    @current_membership = params[:id] # set current_membership
    render :show
  end

  def destroy # removes connect from user to a channel
    @membership = Membership.find(params[:id]).destroy
    render :show
  end

end