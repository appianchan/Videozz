class User < ApplicationRecord 
    validates :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :username, uniqueness: true, presence: true
    
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :videos 

    def self.find_by_credentials(uname, pwd)
       user = User.find_by(username: uname )
       if user && user.is_password?(pwd)
          return user
       end   
       return nil
    end

    def is_password?(pwd)
        pwd_two = BCrypt::Password.new(password_digest)
        pwd_two.is_password?(pwd)
    end
   def password=(pwd)
     @password = pwd
     self.password_digest = BCrypt::Password.create(pwd)
   end 
    
   def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
   end

   def ensure_session_token
    self.session_token||= SecureRandom::urlsafe_base64
   end

end