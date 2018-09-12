class Device < ActiveRecord::Base
	validates :id, presence: true
	validates :timestamp, presence: true
	validates :type, presence: true
	validates :status, presence: true
end