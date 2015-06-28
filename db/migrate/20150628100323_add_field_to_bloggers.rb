class AddFieldToBloggers < ActiveRecord::Migration
  def change
    add_column :bloggers, :name, :string
  end
end
