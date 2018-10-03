class Device < ActiveRecord::Base
	# Disable STI and allow Type to be used as field name
	self.inheritance_column = nil
	validates :timestamp, presence: true
	validates :id, presence: true
	validates :type, presence: true
	validates :status, presence: true


	def self.most_popular_devices(search_date_begin, search_date_end, week_ago_begin, week_ago_end)

		@devices = Device.where("timestamp BETWEEN '#{search_date_begin}' AND '#{search_date_end}'")
		@device_hash = @devices.group(:id).count
		@device_hash = Hash[@device_hash.sort_by{|k,v| v}.reverse].first(10).to_h
		# find % change for most popular devices

		@devices_final = week_comparison(week_ago_begin, week_ago_end, @device_hash)
	end
	
	def self.week_comparison(week_ago_begin, week_ago_end, device_hash)
		@device_with_change = []
		device_hash.each do |new_device, new_occurence|
		hashing = {}
			new_device_instance = Device.find_by(id: new_device)
			old_devices = Device.where(id: new_device).where("timestamp BETWEEN '#{week_ago_begin}' AND '#{week_ago_end}'")
			old_occurence  = old_devices.count
			percentage_change = sprintf('%.2f',((new_occurence.to_f - old_occurence.to_f) / old_occurence.to_f * 100)).to_f
			hashing['percentage'] = percentage_change
			hashing['device'] = new_device_instance
			@device_with_change << hashing
		end
     # flatten to allow for correct format for JSON
     @device_with_change.flatten

	end

    # VIEW 2
    # ------------
    #  filter by uniq id.
    #  have table of all uniq ids with their type and status
    #  can filter by status (online/offline) and type (sensor/ gateway)
    # =>  2 buttons... look into your code from forgetmenot
    # display table with each day and total devices
    # => Device.order(timestamp: :DESC)
    # =>  see if date_table is accurate enough....

  def self.find_by_type_and_status(type,status)
  	
  	if type != "" && status != ""
  		@devices_types = Device.where(type: type, status: status)  
  		# organize device types into hash with array of occurnces per day.. 
  		# contains hash of "day" and then list of devices for that day
  		@devices_types = @devices_types.group("DATE(timestamp)").count.sort_by{|k, v| k}.reverse!.to_h

  	end
  end
end
