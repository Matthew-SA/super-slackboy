class User < ApplicationRecord
  attr_reader :password

  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :messages
  has_one :ui
  has_many :memberships
  has_many :channels, through: :memberships

  def save_with_ui
    User.transaction do 
      if self.save
        ui = Ui.new()
        ui.user_id = self.id
        Membership.create(user_id: self.id, channel_id: 3, last_read: DateTime.now)
        Membership.create(user_id: self.id, channel_id: 2, last_read: DateTime.now)
        Membership.create(user_id: self.id, channel_id: 1, last_read: DateTime.now)
        if ui.save
          return true
        else 
          raise ActiveRecord::Rollback
        end
      end
    end
    false
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end