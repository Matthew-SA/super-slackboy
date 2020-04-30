class Api::UisController < ApplicationController
  def show
    @ui = current_user.ui
    render '/api/ui/show'
  end

end
