class WordScrambler < ActiveRecord::Base


  # def has_same_number_of_letters(guess, answer)
  #   if(guess.length == answer.length)
  #     return "Your guess has the correct number of letters"
  #   elsif (guess.length > answer.length)
  #     return "Your guess has too many letters"
  #   else
  #     return "Your guess has too few letters"
  #   end
  # end


  def has_same_number_of_letters(guess, answer)
    guess.length == answer.length
  end




end
