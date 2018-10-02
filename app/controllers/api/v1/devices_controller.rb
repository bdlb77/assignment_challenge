class Api::V1::DevicesController < ActionController::Base
	def index
		if params[:date]
		  date = params[:date].split('-')

			search_date_begin = DateTime.new(date[0].to_i, date[1].to_i, date[2].to_i)
			search_date_end = DateTime.new(date[0].to_i, date[1].to_i, date[2].to_i, 23, 59, 59)
			week_ago_begin = search_date_begin - 7.days
			week_ago_end =  search_date_end - 7.days
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
