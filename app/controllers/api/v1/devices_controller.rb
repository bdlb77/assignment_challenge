class Api::V1::DevicesController < ActionController::Base
	def index
		if params[:date]
		  a = params[:date].split('-')
			search_date_begin = DateTime.new(a[0].to_i, a[1].to_i, a[2].to_i)
			search_date_end = DateTime.new(a[0].to_i, a[1].to_i, a[2].to_i, 23, 59, 59)
			if a[2].to_i > 7
				week_ago_begin =  DateTime.new(a[0].to_i, a[1].to_i, (a[2].to_i - 7))
				week_ago_end =  DateTime.new(a[0].to_i, a[1].to_i, (a[2].to_i -  7 ), 23, 59, 59)
			else
				week_ago_begin = 0
				week_ago_end = 0
			end
			@array_devices = Device.most_popular_devices(search_date_begin, search_date_end, week_ago_begin, week_ago_end)

      render json: @array_devices

		else
			@devices = Device.all.first(10).flatten
			render json: @devices
		end
	end

	def show
	end
	private



end
