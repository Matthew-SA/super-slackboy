class Api::ChannelsController < ApplicationController
  def index
    if params['type'] == 'browser'
      @channels = Channel.all
      current_user.update(focus: "channel_browser")
    elsif params['type'] == 'init'
      @channels = current_user.channels
    end
    render 'api/channels/index'
  end

  def create
    @timestamp = DateTime.now
    @channel = Channel.new(channel_params)
    @channel.last_message_posted = @timestamp

    if @channel.save

      @membership = Membership.create(
        user_id: current_user.id, 
        channel_id: @channel.id, 
        last_read: @timestamp
      )

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

      @focus = @channel.id.to_s
      current_user.update(focus: @focus)
      render 'api/channels/show'
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end
