class TicketSerializer < ActiveModel::Serializer
  attributes :id, :passenger_name, :created_at
  
  belongs_to :user
  belongs_to :train
end
