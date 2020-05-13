Rails.application.routes.draw do
    root to: 'static_pages#root' # root to: 'messages#root' ??? (from tutorial)
    mount ActionCable.server, at: '/cable'

    namespace :api, defaults: { format: :json } do
        resources :messages
        resources :memberships, only: [:index, :show, :update]
        resources :channels, only: [:index, :create]
        resource :ui
        resource :user, only: [:create, :update]
        resource :session, only: [:create, :destroy, :show]
    end
end
