class Train < ApplicationRecord

    has_many :tickets, dependent: :destroy
    has_many :users, through: :tickets

    validates :section, presence: true
    validates :number, presence: true, uniqueness: true
end
