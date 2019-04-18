Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      post '/user/register', to: 'users#register'
      post '/user/login', to: 'users#login'
      post '/user/addTruck', to: 'users#addTruck'
      post '/user/addLocation', to: 'users#addLocation'
    end
  end
end
