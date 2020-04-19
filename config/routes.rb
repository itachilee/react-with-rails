Rails.application.routes.draw do
  resources :posts
  get 'home/index'
  root 'home#index'
  get 'title/index'
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
end
