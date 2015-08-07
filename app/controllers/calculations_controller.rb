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


    def create
      op = params[:op_id]
      a = params[:a].to_f
      b = params[:b].to_f
      calc = AjaxCalculation.new(a, b)

      case op
      when '1'
        @result = calc.add
      when '2'
        @result = calc.subtract
      when '3'
        @result = calc.multiply
      when '4'
        @result = calc.divide
      when '5'
        @result = calc.exponent
      else
        @result = calc.add
      end
    end


end
