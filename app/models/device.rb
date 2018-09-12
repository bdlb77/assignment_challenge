class Device < ActiveRecord::Base
	# Disable STI and allow Type to be used as field name
	self.inheritance_column = nil 
	validates :timestamp, presence: true
	validates :id, presence: true
	validates :type, presence: true
	validates :status, presence: true


	hash_new = {}
	results.all.sort_by do |result| 
		if !hash_new.has_key?(result['id'])
	  	hash_new[result['id']] = 1
	 	else 
	 		hash_new[result['id']] += 1
	 	end
	end
	 hash_new.sort_by {|k,v| v}.reverse.first(10)

end