class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  before_action :authenticate_user
  
  def authenticate_user
    if session[:user_id].nil?
      flash[:alert] = "Must be signed in"
      redirect_to login_path
    end
  end
end
