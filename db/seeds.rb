# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#  Creation of devices to check use-cases and edge cases
Device.create!(timestamp: '2017-04-30T00:00:10Z', id: 'a4a281ad', type: 'sensor', status: 'offline')
Device.create!(timestamp: '2017-04-30T00:00:10Z', id: 'a4a281ad', type: 'sensor', status: 'offline')
Device.create!(timestamp: '2018-10-6T00:00:10Z', id: 'a4a281ad', type: 'sensor', status: 'offline')
Device.create!(timestamp: '2017-10-4T00:00:10Z', id: 'a4a281ad', type: 'sensor', status: 'offline')
Device.create!(timestamp: '2017-04-30T00:00:10Z', id: 'c702be7d', type: 'gateway', status: 'offline')
Device.create!(timestamp: '2017-04-30T00:00:10Z', id: 'c702be7d', type: 'gateway', status: 'offline')