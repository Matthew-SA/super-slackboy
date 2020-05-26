Rails.application.routes.draw do
    root to: 'static_pages#root' # root to: 'messages#root' ??? (from tutorial)
    mount ActionCable.server, at: '/cable'

    namespace :api, defaults: { format: :json } do
        resources :messages
        resources :memberships, only: [:index, :create, :show, :update, :destroy]
        resources :channels, only: [:index, :create, :show, :destroy]
        resources :users, only: [:index, :create, :update]
        resource :ui
        resource :session, only: [:create, :update, :destroy, :show]
    end
end
