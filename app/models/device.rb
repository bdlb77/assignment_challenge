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
     @array_devices = []
     @device_hash.each do |hash_device, occurence|
     			@array_devices << [@devices.where(id: hash_device).first, occurence]
     end
     # find % change for most popular devices
    if week_ago_begin != 0 && week_ago_end !=0
   		@past_devices = Device.where("timestamp BETWEEN '#{week_ago_begin}' AND '#{week_ago_end}'")
   		@past_device_hash = @past_devices.group(:id).count
   		
   		@device_with_change = []
 			percentage_change = 0
   		#  take device hash w/ most pop devices and compare change to 1 week ago
   		@device_hash.each do |new_device, new_occurence|
 				@past_device_hash.each do |old_device, old_occurence|
 					if old_device == new_device
 					percentage_change = sprintf('%.2f',((new_occurence.to_f - old_occurence.to_f) / old_occurence.to_f * 100)).to_f
 					@device_with_change << [@devices.where(id: new_device).first, percentage_change]
 					end
   			end
   		end
    end
    #  FIND A WAY TO JUST PULL DEVICE THEN ADD OCCURENCE SO YOU HAVE 10

    # VIEW 2
    # ------------
    #  filter by uniq id.
    #  have table of all uniq ids with their type and status
    #  can filter by status (online/offline) and type (sensor/ gateway)
    # =>  2 buttons... look into your code from forgetmenot
    # display table with each day and total devices
    # => Device.order(timestamp: :DESC)
    # =>  see if date_table is accurate enough....

     @device_with_change

	end





	def self.date_table
		# order by timestamps through devices
		# receive the day of  the  timestamp
		# add incrementer and ++ on each device ocurrence for that day
		# change Data into Table to Display (look into each_slice(7))
		hash_of_days = {}
		ordered_by_timestamps = Device.order(timestamp: :desc)
		array_days = ordered_by_timestamps.map do |device|
			if !hash_of_days.has_key?(device.timestamp.day)
				hash_of_days[device.timestamp.day] = 1
			else
				hash_of_days[device.timestamp.day] += 1
			end
		end
		# Returns hash of days and total device occurrences per day
		hash_of_days.sort_by{ |k,v| k}.to_h
	end

end
