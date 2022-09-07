Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  
  delete '/sessions', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  
  resources :tickets 

  resources :trains do
    resources :tickets
  end

  


 end