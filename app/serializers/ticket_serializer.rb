class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price
  
  belongs_to :passenger
  belongs_to :train
end
