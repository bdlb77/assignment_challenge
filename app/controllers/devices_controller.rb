class DevicesController < ApplicationController
	def index
		@device_array = Device.most_popular_devices
		@day_array= Device.date_table
		@compare = Device.week_comparison
	end

	def show
	end
end
