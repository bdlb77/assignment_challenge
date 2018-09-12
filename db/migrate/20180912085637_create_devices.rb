class CreateDevices < ActiveRecord::Migration[5.2]
  def change
    create_table :devices, {:id => false, :force => true} do |t|
    	t.datetime :timestamp
    	t.string :id
    	t.string :type
    	t.string :status
    	t.timestamps
    end
  end
end
