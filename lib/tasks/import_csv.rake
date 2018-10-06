namespace :import_csv do
  desc "Import CSV file"
  task import_csv: :environment do
  	require 'csv'
  	csv_file = 'lib/assets/report.csv'
    Device.destroy_all
  	csv_devices = File.read(csv_file)
  	csv = CSV.parse(csv_devices, :headers => true)
		csv.each do |row|
			Device.create!(row.to_hash)
		end
  end
end
