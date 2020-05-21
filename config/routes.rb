Rails.application.routes.draw do
    root to: 'static_pages#root' # root to: 'messages#root' ??? (from tutorial)
    mount ActionCable.server, at: '/cable'

    namespace :api, defaults: { format: :json } do
        resources :messages
        resources :memberships, only: [:create, :index, :show, :update]
        resources :channels, only: [:index, :create]
        resources :users, only: [:create, :update]
        resource :ui
        resource :session, only: [:create, :destroy, :show]
    end
end
