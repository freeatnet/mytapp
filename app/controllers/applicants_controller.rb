class ApplicantsController < ApplicationController
  protect_from_forgery with: :null_session

  def new
  end

  def create
    @applicant = Applicant.new(applicant_params)
    if @applicant.save
      render @applicant
    else
      render 'new'
    end
  end

  def index
  end

  private
    def applicant_params
      # require accepts a key
      params.require(:applicant).permit(:first_name, :last_name, :utorid, :email, :studentno, :program, :year)
    end
end
