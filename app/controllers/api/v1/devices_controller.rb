class Api::V1::DevicesController < ActionController::Base
  def index
    if params[:date]
      date = params[:date].split('-')
      search_date_begin = DateTime.new(date[0].to_i, date[1].to_i, date[2].to_i)
      search_date_end = DateTime.new(date[0].to_i, date[1].to_i, date[2].to_i, 23, 59, 59)
      week_ago_begin = search_date_begin - 7.days
      week_ago_end = search_date_end - 7.days
      @array_devices = Device.most_popular_devices(search_date_begin, search_date_end, week_ago_begin, week_ago_end)
    elsif params[:type] || params[:status]
      @array_devices = Device.find_by_type_and_status(params[:type], params[:status])
    else
      @array_devices = Device.all.first(10).flatten
    end
    render json: @array_devices
  end
end
