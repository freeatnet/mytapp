class ApplicantsController < ApplicationController
  protect_from_forgery with: :null_session

  def new
  end

  def create
    # Figure out how to spit out body!
    render plain: params[:firstName].inspect
  end

end
