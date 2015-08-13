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


  def has_same_number_of_letters?(guess, answer)
    guess.length == answer.length
  end

  # def are_they_anagrams(guess, answer)
  #   if(!has_same_number_of_letters(guess, answer))
  #     return "The guess and answer are NOT anagrams"
  #   else
  #     return "The guess and answer are anagrams"
  #   end
  #
  # end

  def anagrams(a, b)
    return nil unless a.size == b.size
    a.zip(b).map { |aw,bw| anagram?(aw,bw) ? 1 : 0 }
  end
  
# http://stackoverflow.com/questions/27027538/comparing-two-arrays-containing-strings-for-anagrams-in-ruby
  def are_they_anagrams?(aw, bw)
    return false unless aw.size == bw.size
    counts = aw.downcase.each_char.with_object(Hash.new(0)) { |c,h| h[c] += 1 }
    bw.downcase.each_char do |c|
      return false unless counts[c] > 0
      counts[c] -= 1
    end
    true
  end


end
