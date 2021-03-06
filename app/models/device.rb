class Device < ActiveRecord::Base
  # Disable STI and allow Type to be used as field name
  self.inheritance_column = nil
  self.primary_key = :id
  validates :timestamp, presence: true
  validates :id, presence: true
  validates :type, presence: true
  validates :status, presence: true

  def self.most_popular_devices(search_date_begin, search_date_end, week_ago_begin, week_ago_end)
    @devices = Device.where("timestamp BETWEEN '#{search_date_begin}' AND '#{search_date_end}'")
    @device_hash = @devices.group(:id).count
    @device_hash = Hash[@device_hash.sort_by { |_k, v| v }.reverse].first(10).to_h
    # find % change for most popular devices

    @devices_final = week_comparison(week_ago_begin, week_ago_end, @device_hash)
  end

  def self.week_comparison(week_ago_begin, week_ago_end, device_hash)
    @device_with_change = []
    device_hash.each do |new_device, new_occurence|
      hashing = {}
      new_device_instance = Device.find_by(id: new_device)
      old_devices = Device.where(id: new_device).where("timestamp BETWEEN '#{week_ago_begin}' AND '#{week_ago_end}'")
      old_occurence = old_devices.count
      percentage_change = format('%.2f', ((new_occurence.to_f - old_occurence.to_f) / old_occurence.to_f * 100)).to_f
      hashing['percentage'] = percentage_change
      hashing['device'] = new_device_instance
      @device_with_change << hashing
    end
    # flatten to allow for correct format for JSON
    @device_with_change.flatten
  end

  def self.find_by_type_and_status(type, status)
    return {} if type == "" && status == ""

    @devices_types = Device.where(type: type, status: status)
    # Check to see if current date is valid.. else run the dates given by csv file
    may_date = @devices_types.order(timestamp: :DESC).first.timestamp
    current_date = Date.current
    if @devices_types.exists?(timestamp: current_date)
      @devices_types = @devices_types.where("timestamp BETWEEN '#{current_date - 30.days}' AND '#{current_date}'")
    else
      @devices_types = @devices_types.where("timestamp BETWEEN '#{may_date - 30.days}' AND '#{may_date}'")
    end
    @devices_types = @devices_types.group("DATE(timestamp)").count.sort_by { |k, _v| k }.reverse!.to_h
  end
end
