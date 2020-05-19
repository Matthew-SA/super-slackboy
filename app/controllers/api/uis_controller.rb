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
    elsif params['uiElement'] == 'channel_browser'
      @ui.active_menu_item = 'channel_browser'
      @ui.save
    elsif params['uiElement'] == 'null'
      @ui.active_menu_item = nil
      @ui.save
    end
    render '/api/ui/show'
  end
end
