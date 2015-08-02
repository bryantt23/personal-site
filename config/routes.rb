Rails.application.routes.draw do



  devise_for :bloggers
  devise_for :users
  # Example resource route (maps HTTP verbs to controller actions automatically):

  scope() do
    resources :entries, path: 'blog'
  end


  # http://guides.rubyonrails.org/routing.html#translated-paths
  scope() do
    resources :posts, path: 'heroes'
  end

  resources :contact_forms, only: [:new, :create]

  root                  'static_pages#home'
  get 'resources'    => 'static_pages#resources'
  get 'carousel'    => 'static_pages#carousel'
  get 'survey'    => 'static_pages#survey'
  get 'projects'    => 'static_pages#projects'
  get 'litebrite'    => 'litebrite#litebrite'

end
