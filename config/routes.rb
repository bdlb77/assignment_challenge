Rails.application.routes.draw do
  root to: 'devices#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 	get "/devices", to: 'devices#index'
  # Route for API
  namespace :api, defaults: { format: :json } do
  	namespace :v1 do
  		resources :devices, only: [:index]
  	end
  end
end
