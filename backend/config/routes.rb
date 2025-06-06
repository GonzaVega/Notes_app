Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    namespace :v1 do
      resources :notes do
        member do
          patch :archive
          patch :unarchive
        end
      end
      
      resources :categories
    end
  end
end
