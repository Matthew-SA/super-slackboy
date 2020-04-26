class Api::MessagesController < ApplicationController

  def index
    @messages = Message.all.includes(:user)
    render '/api/messages/index'
  end

end
