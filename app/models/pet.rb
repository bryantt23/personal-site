class Pet < ActiveRecord::Base

	validates :pet_pic, presence: true
	has_attached_file :pet_pic, styles: { :medium => "400x400#" , :thumb => "100x100#" }
	# has_attached_file :avatar, styles: { :medium => "400x400#" }
	validates_attachment_content_type :pet_pic, content_type: /\Aimage\/.*\Z/


end
