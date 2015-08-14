class WordScramblersController < ApplicationController

  # def new
  #   set_current_game WordScrambler.new
  #   redirect_to word_scramblers_path
  # end
  
  def index
    @word = WordScrambler.new
    # redirect_to game_path
  end


  def create

  end


  # def create
  #   word = WordScrambler.new
  #   #
  #   # @newword = word.say_hi
  #   @newword = word.get_word
  #   @scrambled_new_word = word.scramble_word("#{@newword}")
  # end
  #
  # def check_if_a_match
  #   word.are_they_the_same_word?(@guess , @newword)
  # end

end
