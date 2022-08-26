Rails.application.routes.draw do
  post '/login', to: 'sessions#create'

  delete '/sessions', to: 'sessions#destroy'
  
  resources :tickets 
  
  resources :passengers do
   resources :tickets
  end
  
  resources :trains

  get '/me', to: 'users#show'


 end