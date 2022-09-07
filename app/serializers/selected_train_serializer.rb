class SelectedTrainSerializer < ActiveModel::Serializer
  attributes :number, :arrival, :departure
end
