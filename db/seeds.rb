# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
20.times do |x|
  user = User.create!(username: Faker::StarWars.planet + Faker::Address.building_number,
                      password: "password")
  3.times do
    tweet = Tweet.create!(message: Faker::StarWars.quote,
                          user_id: user.id)
  end
end
