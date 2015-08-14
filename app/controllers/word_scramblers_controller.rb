class WordScramblersController < ApplicationController


  def create
    # op = params[:op_id]
    # a = params[:a].to_f
    # b = params[:b].to_f
    # calc = AjaxCalculation.new(a, b)
    word = WordScrambler.new
    #
    # @newword = word.say_hi
    @newword = word.get_word

    @scrambled_new_word = word.scramble_word("#{@newword}")

  #   case op
  #   when '1'
  #     @result = calc.add
  #   when '2'
  #     @result = calc.subtract
  #   when '3'
  #     @result = calc.multiply
  #   when '4'
  #     @result = calc.divide
  #   when '5'
  #     @result = calc.exponent
  #   else
  #     @result = calc.add
  #   end
  end

end
#   scramble = WordScrambler.new
#   @new_word = scramble.get_word
#
# end
# end
