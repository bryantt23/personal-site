class CreateCalculators < ActiveRecord::Migration
  def change
    create_table :calculators do |t|

      t.timestamps null: false
    end
  end
end
