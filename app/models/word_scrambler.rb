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

  # a = [ 4, 5, 6 ]
  # b = [ 7, 8, 9 ]
  # [1,2,3].zip(a, b)      #=> [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  # [1,2].zip(a,b)         #=> [[1, 4, 7], [2, 5, 8]]
  # a.zip([1,2],[8])       #=> [[4,1,8], [5,2,nil], [6,nil,nil]]

  def anagrams(guess, answer)
    return nil unless (has_same_number_of_letters?(guess, answer))
    guess.zip(answer).map do |aw,bw|
      anagram?(aw,bw) ? 1 : 0
    end
  end

  # http://stackoverflow.com/questions/27027538/comparing-two-arrays-containing-strings-for-anagrams-in-ruby
  def are_they_anagrams?(aw, bw)
    # return false unless aw.size == bw.size
    return false unless (has_same_number_of_letters?(aw, bw))
    counts = aw.downcase.each_char.with_object(Hash.new(0)) do
      |c,h| h[c] += 1
    end
    bw.downcase.each_char do |c|
      return false unless counts[c] > 0
      counts[c] -= 1
    end
    true
  end

  # https://lorenzod8n.wordpress.com/2008/01/24/scrambling-words-in-ruby/
  def scramble_word(in_word)
    out_word = in_word.split(//).sort_by { rand }.join("")
    # out_word =~ /[A-Z]/ && out_word =~ /[a-z]/ ? out_word.downcase : out_word.downcase
  end

  def are_they_the_same_word?(guess, answer)
    return guess.gsub(/\s+/, "").downcase==answer.downcase
  end

  # http://stackoverflow.com/questions/9464065/how-to-sort-a-strings-characters-alphabetically
  def answer_in_alpha_order(answer)
    answer.chars.sort.join
  end

  def add_wrong_answer(guess, answer)
    if (!are_they_the_same_word?(guess, answer))
      # http://stackoverflow.com/questions/14004325/add-element-to-an-array-if-its-not-there-already
      my_array = Array.new 
      # my_array=[]
      my_array.push(guess) unless my_array.include?(guess)

    end

  end

end
