namespace :import_csv do
  desc "Import CSV file"
  task import_csv: :environment do
  	require 'csv'
  	csv_devices = File.read('/Users/bryanleighton/code/bdlb77/kiwi-assignment/Assignment4/report.csv')
  	csv = CSV.parse(csv_devices, :headers => true)
		csv.each do |row|
			Device.create!(row.to_hash)
		end
  end
end
