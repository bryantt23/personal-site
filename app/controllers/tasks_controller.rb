# tasks_controller.rb

class TasksController < ApplicationController
  before_action :all_tasks, only: [:index, :create, :update, :destroy]
  before_action :set_tasks, only: [:edit, :update, :destroy]


  respond_to :html, :js

  # index action has been removed

  def new
    @task = Task.new
  end

  def create
    @task  = Task.create(task_params)
  end

  def update
    @task.update_attributes(task_params)
  end

  def destroy
    @task.destroy
  end



  private

  def set_tasks
    @task = Task.find(params[:id])
  end

  def all_tasks
    @tasks = Task.all
  end

  def task_params
    params.require(:task).permit(:description, :deadline)
  end
end
