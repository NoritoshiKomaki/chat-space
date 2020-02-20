class DeviseCreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t| 
      t.string :name,               null: false
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
    end
    add_index :users, :name, unique: true
  end
end
