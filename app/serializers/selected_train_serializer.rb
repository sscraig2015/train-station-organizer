class SelectedTrainSerializer < ActiveModel::Serializer
  attributes :number, :arrival, :departure

  has_many :passengers
end
