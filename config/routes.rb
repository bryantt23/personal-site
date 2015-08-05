Rails.application.routes.draw do



  devise_for :bloggers
  devise_for :users
  # Example resource route (maps HTTP verbs to controller actions automatically):

  # scope() do
  #   resources :entries, path: 'blog'
  # end

    resources :entries

  # http://guides.rubyonrails.org/routing.html#translated-paths
  scope() do
    resources :posts, path: 'heroes'
  end

  resources :contact_forms, only: [:new, :create]

  root                  'static_pages#home'
  get 'resources'    => 'static_pages#resources'
  get 'carousel'    => 'static_pages#carousel'
  get 'stress'    => 'static_pages#stress'
  get 'projects'    => 'static_pages#projects'
  get 'background_color'    => 'static_pages#background_color'

  get 'litebrite'    => 'litebrite#litebrite'


  # '/blog' :get=> redirect_to "https://bryanttunbutr.wordpress.com/"
  #
  # '/blog' => redirect_to "https://bryanttunbutr.wordpress.com/"
  get "/blog" => redirect("http://bryanttunbutr.wordpress.com")
  # get '/blog', to: redirect('http://bryanttunbutr.wordpress.com')

end
