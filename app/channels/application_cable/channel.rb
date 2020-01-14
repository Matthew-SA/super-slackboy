module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def current_user(user_id, session_token) # TODO: Verify by user_id
      return nil unless session_token
      @current_user ||= User.find_by_session_token(session_token)
    end
  end
end
