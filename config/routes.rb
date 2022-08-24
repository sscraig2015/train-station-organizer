Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  
  resources :tickets 
  
  resources :passengers do
   resources :tickets
  end
  
  resources :trains

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
 end