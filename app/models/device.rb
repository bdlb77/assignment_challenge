class Device < ActiveRecord::Base
	# Disable STI and allow Type to be used as field name
	self.inheritance_column = nil 
	validates :timestamp, presence: true
	validates :id, presence: true
	validates :type, presence: true
	validates :status, presence: true

	def self.most_popular_devices
		hash_new = {}
		# !!!! HARD CODED THE DAY!!!!!!
		day_select(10).each do  |result| 
			if !hash_new.has_key?(result['id'])
				hash_new[result['id']] = 1
			else 
				hash_new[result['id']] += 1
			end
		end
		hash_new = hash_new.sort_by { |k, v| -k }.first(10).to_h
	end

	def self.week_comparison
		hash_new = most_popular_devices
		hash_old = {}

		day_select(10-7).each do  |result| 
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
		percentage_change_array = []
		sorted_old_hash.each do |old_key, old_value|
			hash_new.each do |new_key, new_value|
				if old_key == new_key
					# round up to 2nd decimal and reconvert back to float from string
					percentage_change_array << sprintf('%.2f',((new_value.to_f - old_value.to_f) / old_value.to_f * 100)).to_f
				end
			end
		end
		percentage_change_array
	end

	# def self.calculate_percentage_change(new_value, original_value)
	# 	value_difference = new_value.to_f - original_value.to_f
	# 	percentage_change = (value_difference.to_f / original_value.to_f * 100)
	# end

	def self.day_select(input)
		## Find devices of specific day
		Device.select{ |device| device.timestamp.day == input}
	end

	def self.device_select
		array = []
		hash_of_device_ids = most_popular_devices
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