class HomeController < ApplicationController
  def index
    
  end

  def user
    @users = User.allUsers
    respond_to do |format|
      format.turbo_stream
    end
  end

  def filter
    respond_to do |format|
      if params[:to].present? && params[:from].present? && params[:name].present?
        format.turbo_stream
        @users = User.searchAll(params[:to],params[:from],params[:name])
      elsif params[:to].present? && params[:from].present?
        @users = User.toTOFrom(params[:to],params[:from])
        format.turbo_stream
      end
    end
  end

end
