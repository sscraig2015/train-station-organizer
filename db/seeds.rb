require 'faker'

User.create(username: "sscraig", password: "abadpassword", password_confirmation: "abadpassword", display_name: "Sean")
User.create(username:'jjcraig', password: 'abaddpassword', display_name: 'Sean 2')

sections = ["Standard", "First-class", "Business"]
10.times{Train.create(number: Faker::Number.number(digits: 3), section: sections.sample, arrival: Faker::Address.city, departure: Faker::Address.city )}
