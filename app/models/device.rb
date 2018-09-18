class Device < ActiveRecord::Base
	# Disable STI and allow Type to be used as field name
	self.inheritance_column = nil
	validates :timestamp, presence: true
	validates :id, presence: true
	validates :type, presence: true
	validates :status, presence: true


	def self.most_popular_devices(array_of_devices)


    # SQL GROUP BY id ? what does it return?
    # [[id:1,  ] [id: 2]] count the occurences of the id (.length for arrays)
	  # arrange by id's with most occurences .order(:DESC)
    # take the first 10 from these and flatten the array if need be..
    # =>  .first(10).flatten
    # then calculate occurences from a week past
    # where timestamp: timestamp.day - 7 from array of id's with most occurrences
    # use percentage algorithm
    # => sprintf('%.2f',((new_value.to_f - old_value.to_f) / old_value.to_f * 100)).to_f



    # VIEW 2
    # ------------
    #  filter by uniq id.
    #  have table of all uniq ids with their type and status
    #  can filter by status (online/offline) and type (sensor/ gateway)
    # =>  2 buttons... look into your code from forgetmenot
    # display table with each day and total devices
    # => Device.order(timestamp: :DESC)
    # =>  see if date_table is accurate enough....



    # hash_new = {}
		# # !!!! HARD CODED THE DAY!!!!!!
		# day_select(date).each do  |result|
		# 	if !hash_new.has_key?(result['id'])
		# 		hash_new[result['id']] = 1
		# 	else
		# 		hash_new[result['id']] += 1
		# 	end
		# end
		# hash_new = hash_new.sort_by { |k, v| -v }.first(10).to_h


	end

	def self.week_comparison(date)
	date - 7 > 0 ? percentage_change_hash = {} : percentage_change_hash = "Data is not available." #condition?

		hash_new = most_popular_devices(date)
		hash_old = {}

		day_select(date - 7).each do  |result|
				if !hash_old.has_key?(result['id'])
					hash_old[result['id']] = 1
				else
					hash_old[result['id']] += 1
				end
		end
		# Sorting hash by descending values(occurrences)
		sorted_old_hash = {}
			 hash_old.each do |old_device_id, value|
				hash_new.each do |array_of_device|
					array_of_device.each do |new_device_id|
						if old_device_id == new_device_id
							  sorted_old_hash[old_device_id] = value
						end
					end
				end
			end
			# sort old hash values by descending order
		sorted_old_hash = sorted_old_hash.sort_by { |k, v| -k }.first(10).to_h
		sorted_old_hash.each do |old_key, old_value|
			hash_new.each do |new_key, new_value|
				if old_key == new_key
					# round up to 2nd decimal and reconvert back to float from string
					percentage_change_hash["#{new_key}"] = sprintf('%.2f',((new_value.to_f - old_value.to_f) / old_value.to_f * 100)).to_f
				end
			end
		end
		percentage_change_hash
	end

	def self.day_select(input)
		## Find devices of specific day
		Device.select{ |device| device.timestamp.day == input}
	end

	def self.device_select(date)
		array = []
		hash_of_device_ids = most_popular_devices(date)
		hash_of_device_ids.each do |id, occurence|
			# receive just device instance from  hash of device ids
			array << Device.where(id: id).uniq{|device| device.id}
		end
		array
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
