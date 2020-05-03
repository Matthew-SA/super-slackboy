Rails.application.routes.draw do
    root to: 'static_pages#root' # root to: 'messages#root' ??? (from tutorial)
    mount ActionCable.server, at: '/cable'

    namespace :api, defaults: { format: :json } do
        resources :users, only: [:create]
        resources :messages
        resources :channels, only: [:index]
        resource :ui
        resource :session, only: [:create, :destroy, :show]
    end
end
