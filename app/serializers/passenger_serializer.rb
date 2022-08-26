class PassengerSerializer < ActiveModel::Serializer
  attributes :name
  
  
  has_many :tickets
  
  
end
