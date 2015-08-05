class CalculationsController < ApplicationController

  def index
  end


  def calculate

    age = params[:age].to_i
    initial_contribution = params[:initial_contribution].to_i
    annual_interest_rate=params[:annual_interest_rate].to_i

    calc = Calculator.new

    @result = calc.how_much_at_retirement(age, initial_contribution, annual_interest_rate)
    @age=age
    @initial_contribution=initial_contribution
    @annual_interest_rate=annual_interest_rate



  end


end
