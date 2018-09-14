class DevicesController < ApplicationController
	def index
		if params[:search].present?
			@device_hash = Device.most_popular_devices(set_params)
			@day_array = Device.date_table
			@compare = Device.week_comparison(set_params)

			# connect device hash to device model instances
		 @selected_devices = Device.device_select(set_params)
		end
	end

	def show
	end
	private

	def set_params
		search_params = params[:search][:pick_a_date].to_date.day
	end

end
