Rails.application.routes.draw do



  devise_for :users
  # Example resource route (maps HTTP verbs to controller actions automatically):
    resources :posts
    resources :entries

  resources :contact_forms, only: [:new, :create]

  root                  'static_pages#home'
  get 'resources'    => 'static_pages#resources'
  get 'carousel'    => 'static_pages#carousel'
  get 'projects'    => 'static_pages#projects'
  get 'litebrite'    => 'litebrite#litebrite'



  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

end
