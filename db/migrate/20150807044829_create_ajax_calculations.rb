class CreateAjaxCalculations < ActiveRecord::Migration
  def change
    create_table :ajax_calculations do |t|
      t.string :index

      t.timestamps null: false
    end
  end
end
