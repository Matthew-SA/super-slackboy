class Api::ChannelsController < ApplicationController
  def index # view all public channels (for channel browser)
    @channels = Channel.where(direct_message: false)
    @focus = 'channel_browser'
    current_user.update(focus: @focus)
    render :index
  end

  def show # view a channel and its connected messages.
    @channel = Channel.find(params[:id])
    current_user.update(focus: params[:id])
    render :show
  end

  def create # create a new channel AND membership (needed for potential private channels or DMs.  Cannot have this function as part of create membership)
    @timestamp = DateTime.now
    @channel = Channel.new(channel_params)
    @channel.last_message_posted = @timestamp

    if @channel.save
      @membership = Membership.create(
        user_id: current_user.id, 
        channel_id: @channel.id, 
        last_read: @timestamp
      )
      @focus = @channel.id.to_s
      current_user.update(focus: @focus)
      render :show
    end
  end


  private
  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end


# old
      # if @channel.direct_message
      #   @other_membership = Membership.create(
      #     user_id: params[other.id], # Make sure this param is okay!
      #     channel_id: @channel.id, 
      #     last_read: @timestamp
      #   ) 
      #   # broadcast this membership to target id.
      # end
    #   ChatChannel.broadcast_to("current_user_#{current_user.id}", JSON.parse(
    #   ApplicationController.render(
    #     template: 'api/channels/show', 
    #     locals: { channel: @channel }
    #   )
    # ))