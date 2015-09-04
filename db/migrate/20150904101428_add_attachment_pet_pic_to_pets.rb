class AddAttachmentPetPicToPets < ActiveRecord::Migration
  def self.up
    change_table :pets do |t|
      t.attachment :pet_pic
    end
  end

  def self.down
    remove_attachment :pets, :pet_pic
  end
end
