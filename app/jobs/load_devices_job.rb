class LoadDevicesJob < ApplicationJob
  queue_as :default
  def perform(*_args)
    # Do something later
    require 'csv'
    Device.destroy_all
    csv_devices = File.read('lib/assets/report.csv')
    csv = CSV.parse(csv_devices, headers: true)
    csv.each do |row|
      Device.create!(row.to_hash)
    end
    puts "Devices Created"
  end
end
