Rails.application.routes.draw do



  resources :pets do
    member do
      post 'upvote'
    end
  end

  resources :flashcards

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  get 'stickies/sticky'

  get 'calculators/calculate'

  get 'calculators/create'

  get 'calculators/index'

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
  get 'eye_see'    => 'static_pages#eye'
  get 'spinning_wheel'    => 'static_pages#spinning_wheel'
  get 'tip_calculator'    => 'static_pages#tip_calculator'
  get 'mystery_movie'    => 'static_pages#mystery_movie'
  get 'countdown'    => 'static_pages#countdown'
  get 'rain'    => 'static_pages#rain'
  get 'cats'    => 'static_pages#cats'
  get 'weather'    => 'static_pages#weather'
  get 'rotating_pics'    => 'static_pages#rotating_pics'
  get 'scrambled_words'    => 'static_pages#scrambled_words'
  get 'pros_cons'    => 'static_pages#pros_cons'
  get 'random_quote'    => 'static_pages#random_quote'
  get 'recipe'    => 'static_pages#recipe'
  get 'days_from'    => 'static_pages#days_from'
  get 'meditation'    => 'static_pages#meditation'
  get 'closure'    => 'static_pages#closure'
  get 'projects_carousel'    => 'static_pages#projects_carousel'
  get 'survey'    => 'static_pages#survey'
  get 'sedona_method'    => 'static_pages#sedona_method'
  get 'translate'    => 'static_pages#translate'
  get 'canvas'    => 'static_pages#canvas'
  get 'reflection'    => 'static_pages#reflection'
  get 'etch_a_sketch'    => 'static_pages#etch_a_sketch'


  get 'litebrite'    => 'litebrite#litebrite'

  get "/blog" => redirect("http://bryanttunbutr.wordpress.com")
  get "/routing" => redirect("http://codepen.io/bryantt23/full/dYZdOY/")


  get 'calculations/index'
  # http://stackoverflow.com/questions/18368933/matching-and-routes-in-rails
  #match is deprecated
  post "/calculate" => "calculations#calculate"

  resources :calculators
  resources :ajax_calculations
  resources :tasks



end
