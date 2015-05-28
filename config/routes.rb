Rails.application.routes.draw do


  resources :contact_forms, only: [:new, :create]
  
  root                  'static_pages#home'
  get 'resources'    => 'static_pages#resources'
  get 'fun'    => 'static_pages#fun'



  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

end
