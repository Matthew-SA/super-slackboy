class Api::UisController < ApplicationController
  def show
    @ui = current_user.ui
    render '/api/ui/show'
  end

  def update
    @ui = current_user.ui
    if params['uiElement'] == 'show_channels'
      @ui.toggle(:show_channels).save
    elsif params['uiElement'] == 'show_direct_messages'
      @ui.toggle(:show_direct_messages).save
    end
    render '/api/ui/show'
  end
end
