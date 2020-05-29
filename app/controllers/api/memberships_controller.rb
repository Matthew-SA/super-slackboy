class Api::MembershipsController < ApplicationController

  def index # √ Get Memberships and connected channels on initial load
    @memberships = current_user.memberships.includes(:channel)
    render :index
  end

  # def create # if channel is public, join user to channel
  #   @channel = Channel.find(params[:channelId])
  #   if !@channel.direct_message
  #     @membership = Membership.create!(user_id: current_user.id, channel_id: params[:channelId], last_read: DateTime.now)
  #     render :show
  #   end
  # end

  # def destroy # removes connection from user to a channel
  #   @membership = Membership.find(params[:id]).destroy
  #   render :show
  # end

end
# memberships: {membershipId => membership}
# channels: {channelId => channel}
# index: memberships?: boolean
# 
# 
# 

# def index # Get Memberships and connected channels on initial load
#     @memberships = current_user.memberships.includes(:channel)
#     @channels = current_user.channels.includes(:memberships)
#     # @channels = Channel.includes(:memberships).where("memberships.user_id" => current_user.id)

#     @channels.each do |channel|
#       puts channel.memberships.count
#     end
#     current_membership = current_user.current_membership
#     @current_membership = current_membership ? current_membership.id : current_user.memberships.first.id
#     render :index
# end

  # def update # updates when user last viewed a channel
  #   @membership = Membership.find(current_user.current_membership) # get and return last_read membership
  #   @membership.update(last_read: DateTime.now)
  #   render :show
  # end