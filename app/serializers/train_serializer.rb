class TrainSerializer < ActiveModel::Serializer
  attributes :id, :number, :section

  has_many :tickets
  
end
