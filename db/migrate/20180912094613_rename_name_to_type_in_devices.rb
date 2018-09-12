class RenameNameToTypeInDevices < ActiveRecord::Migration[5.2]
  def change
  	rename_column :devices, :name, :type
  end
end
