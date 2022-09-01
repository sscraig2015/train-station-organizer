class User < ApplicationRecord

    has_secure_password
    
    has_many :tickets, dependent: :destroy
    has_many :trains, through: :tickets

    validates :username, presence: true, uniqueness: true
    validates :display_name, presence: true
end
