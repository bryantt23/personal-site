class Post < ActiveRecord::Base

	belongs_to :user

	validates :name, presence: true, length: {minimum: 3}
	validates :secret,  presence: true

	# has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
	# validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/


	validates :avatar, presence: true
	has_attached_file :avatar, styles: { :medium => "400x400#" , :thumb => "100x100#" }
	# has_attached_file :avatar, styles: { :medium => "400x400#" }
	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/


end
