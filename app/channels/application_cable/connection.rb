module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
      def find_verified_user
        # user_id = cookies[:user_id]
        # session_token = cookies[:session_token]
        # verified_user = User.find_by(id: user_id, session_token: session_token)

        ## found encrypted cookie!?
        verified_user = User.find_by_session_token(
          cookies.encrypted['_full_stack_slack_session']['session_token'])
        if verified_user
          verified_user
        else
          reject_unauthorized_connection
        end
      end
  end
end

