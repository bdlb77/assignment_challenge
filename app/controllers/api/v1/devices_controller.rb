class Api::V1::DevicesController < ActionController::Base
	def index
		if params[:date]
		  a = params[:date].split('-')
			search_date_begin = DateTime.new(a[0].to_i, a[1].to_i, a[2].to_i)
			search_date_end = DateTime.new(a[0].to_i, a[1].to_i, a[2].to_i, 23, 59, 59)
			@devices = Device.where("timestamp BETWEEN '#{search_date_begin}' AND '#{search_date_end}'").first(10).flatten
			# SQL GROUP BY id ? what does it return?
      # [[id:1,  ] [id: 2]] count the occurences of the id (.length for arrays)
      render json: @devices

		else
			@devices = Device.all.first(10).flatten
			render json: @devices
		end
	end

	def show
	end
	private



end
