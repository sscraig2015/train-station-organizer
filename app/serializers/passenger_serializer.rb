class PassengerSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :trains
end
