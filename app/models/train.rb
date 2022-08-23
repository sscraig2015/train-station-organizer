class Train < ApplicationRecord

    has_many :tickets, dependent: :destroy
    has_many :passengers, through: :tickets

    validates :section, presence: true
    validates :number, presence: true, uniqueness: true
end
