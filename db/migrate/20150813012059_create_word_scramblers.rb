class CreateWordScramblers < ActiveRecord::Migration
  def change
    create_table :word_scramblers do |t|

      t.timestamps null: false
    end
  end
end
