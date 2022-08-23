Rails.application.routes.draw do
  resources :tickets
  
  resources :passengers

  resources :trains
 end