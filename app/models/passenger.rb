class Passenger < ApplicationRecord

    has_many :tickets, dependent: :destroy
    has_many :trains, through: :tickets

    validates :name, presence: true
end
