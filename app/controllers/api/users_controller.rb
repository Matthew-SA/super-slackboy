class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.username = (@user.email).split('@').first.capitalize
    if @user.save_with_ui
      Membership.create(user_id: @user.id, channel_id: 4, last_read: DateTime.now)
      Membership.create(user_id: @user.id, channel_id: 3, last_read: DateTime.now)
      Membership.create(user_id: @user.id, channel_id: 2, last_read: DateTime.now)
      Membership.create(user_id: @user.id, channel_id: 1, last_read: DateTime.now)
      login(@user)
      render "api/user/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def update
  #   @user = current_user
  #   channelId = params['newChannelId']
  #   if @user.update(current_channel: channelId)
  #     membership = Membership.where(channel_id: channelId, user_id: @user.id)
  #     membership[0].last_arrived = DateTime.new
  #     membership[0].save
  #   end
  #   render "api/user/show"
  # end

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