module ApplicationCable
  class Channel < ActionCable::Channel::Base

  def current_user(user_id, session_token)
    return nil unless user_id && session_token
    User.find_by(id: user_id, session_token: session_token)
  end


    # def current_user(user_id, session_token) # TODO: Verify by user_id
    #   return nil unless session_token
    #   @current_user ||= User.find_by(session_token: session_token, id: user_id)
    #   # debugger
    # end
  end
end
