class RemoveDeadline < ActiveRecord::Migration
  def change
    remove_column :tasks, :deadline,  :date
  end
end
