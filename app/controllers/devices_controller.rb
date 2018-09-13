class DevicesController < ApplicationController
	def index
		@device_hash = Device.most_popular_devices
		@day_array= Device.date_table
		@compare = Device.week_comparison
		# connect device hash to device model instances
		@selected_devices = Device.device_select
	end

	def show
	end
end
