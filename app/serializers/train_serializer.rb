class TrainSerializer < ActiveModel::Serializer
  attributes :id, :number, :arrival, :departure

  has_many :tickets
  
end
