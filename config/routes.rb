Rails.application.routes.draw do


  root                  'static_pages#home'
  get 'resources'    => 'static_pages#resources'


  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

end
