class ChangeColumnTypeToNameInDevices < ActiveRecord::Migration[5.2]
  def change
  	rename_column :devices, :type, :name
  end
end
