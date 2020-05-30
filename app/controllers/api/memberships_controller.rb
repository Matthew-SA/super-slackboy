class Api::MembershipsController < ApplicationController

  def index # √ Get Memberships and connected channels on initial load
    @memberships = current_user.memberships.includes(:channel)
    render :index
  end

  def create
    user = current_user
    chanId = params[:membership][:chanId]
    time = DateTime.now
    if chanId
      @membership = Membership.create!(user_id: user.id, channel_id: chanId, last_read: time)
      @channel = Channel.find(chanId)
      render :show
    else
      @channel = Channel.new(membership_params)
      @channel.last_message_posted = time
      if @channel.save
        @membership = Membership.create!(user_id: user.id, channel_id: @channel.id, last_read: time)
        render :show
      end
    end
  end

  def destroy # removes connection from user to a channel
    @membership = Membership.find(params[:id]).destroy
    @channel = @membership.channel
    render :show
  end

  private
  def membership_params
    params.require(:membership).permit(:name, :description, :chanId)
  end
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