class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
		@user = current_user
    @posts = Post.all.order('created_at ASC')
  end

  def new
		@post = current_user.posts.build
    # @post = Post.new
  end

  def create
		@post = current_user.posts.build(post_params)

    if @post.save
      redirect_to @post
    else
      render 'new'
    end
  end

  def show
		@user = current_user
  end

  def edit
  end

  def update

    if @post.update(post_params)
      redirect_to @post
    else
      render 'edit'
    end
  end

  def destroy
    @post.destroy

    redirect_to posts_path
  end

  private


  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:name, :secret, :avatar)
  end
end
