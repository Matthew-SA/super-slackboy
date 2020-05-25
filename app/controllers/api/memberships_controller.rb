class Api::MembershipsController < ApplicationController
  def index # OKAY (gets memberships and channels on load) - possibly add focus channel info.
    @memberships = current_user.memberships.includes(:channel)
    @channels = current_user.channels
    render :index
  end
  
  def create # ??? create membership to existing channel.  show new membership on completion
    @focus = params[:channelId]
    @membership = Membership.new(user_id: current_user.id, channel_id: @focus, last_read: DateTime.now)
    if @membership.save
      @channel = @membership.channel
      @messages = @channel.messages
      current_user.update(focus: @focus)
      render :show
    end
  end

  # def show # ??? needed? show membership and channel and messages
  #   @membership = Membership.find(params[:id])
  #   @channel = @membership.channel
  #   @messages = @channel.messages
  #   @focus = @channel.id
  #   current_user.update(focus: @focus)
  #   render :show
  # end

  def update
    @membership = Membership.find(params[:id])
    render :show
  end

end
