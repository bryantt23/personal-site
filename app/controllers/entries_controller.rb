class EntriesController < ApplicationController

  before_action :authenticate_blogger!, except: [:index, :show]

  before_action :find_entry, only: [:show, :edit, :update, :destroy]

  def index
    @entries = Entry.all.order('created_at DESC').paginate(page: params[:page], per_page: 10)
  end

  def new
    @entry = Entry.new
  end

  def show
  end

  def create
    @entry = Entry.new(entry_params)

    if @entry.save
      redirect_to @entry
    else
      render 'new'
    end
  end

  def edit
  end

  def update

    if @entry.update(params[:entry].permit(:title, :body))
      redirect_to @entry
    else
      render 'edit'
    end
  end

  def destroy
    @entry.destroy

    redirect_to entries_path
  end

  private

  def entry_params
    params.require(:entry).permit(:title, :body, :slug)
  end

	def find_entry
		@entry = Entry.friendly.find(params[:id])
	end
end
