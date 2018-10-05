class LoadDevicesJob < ApplicationJob
  queue_as :default
  def perform(*args)
    # Do something later
    puts "seeing if this works.."
    require 'csv'
  	Device.destroy_all
  	csv_devices = File.read('/Users/bryanleighton/code/bdlb77/kiwi-assignment/Assignment4/report.csv')
  	csv = CSV.parse(csv_devices, :headers => true)
		csv.each do |row|
			Device.create!(row.to_hash)
			puts "Device created"
		end
    puts "yay"
  end
end
