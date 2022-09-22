Rails.application.routes.draw do
  
  # root "home#index"
  get "/home", to: "home#index"
  get "/users", to: "home#user"
  post "/filter", to: "home#filter"
end
