class DevicesController < ApplicationController
	def index
		@device_hash = Device.most_popular_devices
		@day_array= Device.date_table
		@compare = Device.week_comparison
		@selected_devices = Device.device_select
		raise
	end

	def show
	end
end
