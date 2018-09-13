class Api::V1::DevicesController < ActionController::Base
	def index
		@devices = Device.device_select
		render json: @devices
	end
end
