class Device < ActiveRecord::Base
	# Disable STI and allow Type to be used as field name
	self.inheritance_column = nil 
	validates :timestamp, presence: true
	validates :id, presence: true
	validates :type, presence: true
	validates :status, presence: true


end