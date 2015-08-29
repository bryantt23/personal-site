class CreateFlashcards < ActiveRecord::Migration
  def change
    create_table :flashcards do |t|
      t.string :question
      t.string :answer

      t.timestamps null: false
    end
  end
end
