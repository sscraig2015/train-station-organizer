class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :created_at
  
  belongs_to :passenger
  belongs_to :train
end
