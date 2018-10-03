class DevicesController < ApplicationController
	def index
		# if params[:search].present?
		# 	@device_hash = Device.most_popular_devices(set_params)
		# 	@compare = Device.week_comparison(set_params)
		# end
			# connect device hash to device model instances		end
	end

	def show
	end
	private

	def set_params
		search_params = params[:search][:pick_a_date].to_date.day
	end

end
