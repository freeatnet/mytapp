class ApplicantFormController < ApplicationController
  protect_from_forgery with: :null_session
  def save
    puts params
    render :json => params
  end
end
