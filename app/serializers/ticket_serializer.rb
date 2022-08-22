class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price
  has_one :passenger
  has_one :trains
end
