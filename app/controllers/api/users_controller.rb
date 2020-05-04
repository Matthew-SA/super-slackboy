class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.username = (@user.email).split('@').first

    if @user.save_with_ui
      Membership.create(user_id: @user.id, channel_id: 1)
      Membership.create(user_id: @user.id, channel_id: 2)
      Membership.create(user_id: @user.id, channel_id: 3)
      login(@user)
      render "api/user/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @user.update(current_channel: params['newChannelId'])
    render "api/user/show"
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end


# class Api::UsersController < ApplicationController

#   def create
#     @user = User.new(user_params)
#     if @user.save
#       login!(@user)
#       render :show
#     else
#       render json: @user.errors.full_messages, status: 401
#     end
#   end
  
  # def update
  #   @user = selected_user
  #   if @user && @user.update_attributes(user_params)
  #     render :show
  #   elsif !@user
  #     render json: ['Could not locate user'], status: 400
  #   else
  #     render json: @user.errors.full_messages, status: 401
  #   end
  # end
  
#   def show
#     @user = selected_user
#   end
  
#   def index
#     @users = User.all
#   end
  
# def destroy
#   @user = selected_user
#   if @user
#     @user.destroy
#     render :show
#   else
#     render ['Could not find user']
#   end
# end
  
#   private
  
#   def selected_user
#     User.find(params[:id])
#   end
  
#   def user_params
#     params.require(:user).permit(:username, :email, :password)
#   end
  
# end