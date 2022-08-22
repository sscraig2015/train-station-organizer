class Passenger < ApplicationRecord

    has_many :tickets
    has_many :trains, through: :tickets
end
