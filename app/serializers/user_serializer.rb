class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name

  has_many :tickets
end
