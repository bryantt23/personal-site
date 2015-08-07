class CalculatorsController < ApplicationController

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
