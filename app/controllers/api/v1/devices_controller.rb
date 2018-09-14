class Api::V1::DevicesController < ActionController::Base
	def index
			@devices = Device.device_select(2).flatten
			render json: @devices
	end

	def show
	end
	private


	
end
