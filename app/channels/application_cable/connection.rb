module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
      # reject_unauthorized_connection if !current_user
      # token = current_user()
      # debugger
    end

    private
      def find_verified_user
        # or however you want to verify the user on your system
        user_id = cookies[:user_id]
        session_token = cookies[:session_token]
        verified_user = User.find_by(id: user_id, session_token: session_token)

        if verified_user
          verified_user
        else
          reject_unauthorized_connection
        end
      end
  end
end
# module ApplicationCable
#   class Connection < ActionCable::Connection::Base
#     # identified_by :current_user

#     def connect
#       current_user = find_verified_user

#       reject_unauthorized_connection if !current_user
#       # token = current_user()
#       # debugger
#     end

#     private
#       def find_verified_user
#         # or however you want to verify the user on your system
#         user_id = cookies[:user_id]
#         session_token = cookies[:session_token]
#         verified_user = User.find_by(id: user_id, session_token: session_token)

#         if verified_user
#           verified_user
#         end
#       end
#   end
# end


