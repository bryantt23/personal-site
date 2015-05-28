class AddNameSecretPosts < ActiveRecord::Migration
  def change
    add_column :posts, :name, :string
    add_column :posts, :secret, :string
  end
end
