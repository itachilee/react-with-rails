Rails.application.routes.draw do
  resources :posts
  get 'home/index'
  root 'home#index'
  get 'title/index'
end
