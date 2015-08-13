require 'test_helper'

class WordScramblerTest < ActiveSupport::TestCase

  def setup
    @word = WordScrambler.new
  end


  #
  # get it to display the random word scrambled
  # maybe run some sort of anagram check
  # show anagram in alphabetical order
  #
  # if the choice is wrong, make the wrong answers no longer hidden and append it, maybe i can compare to the array of wrong items so i don't list it twice, or display a message that it is incorrect by a pop up/alert
  #
  # if it is an exact match, send a congrats message
  # Match
  # match
  # MaTCH
  # m   at ch
  # mat != match
  # ugh might need regular expressions :(
  # ignore whitespace
  # check it turns to lower case  (but its built in i think)
  #   check if it is an anagram
  #
  # next create a test for are these words anagrams to test my scrambling function
  #
  # maybe create a test for you already guessed that word, i.e. word is already in array
  #
  # include tests for too many letters, too few letters, or letters are not in the answer by using the anagram test, but only make these tests pass if i have time

  test "checks to see if the guess has the same number of letters as the answer" do
    assert_equal false, @word.has_same_number_of_letters?("hello", "hell")
    assert_equal true, @word.has_same_number_of_letters?("hellohowareyou", "hellohowareyou")
  end

  # test "checks to see if the guess has the same, more, or fewer letters than the answer and tells the user" do
  #   assert_equal "Your guess has the correct number of letters", @word.has_same_number_of_letters("hellohowareyou", "hellohowareyou")
  #   assert_equal "Your guess has too many letters", @word.has_same_number_of_letters("hello", "hell")
  #   assert_equal "Your guess has too few letters", @word.has_same_number_of_letters("hello", "hellohowareyou")
  # end

    test "checks to see if the guess is an anagram of the answer and tells the user if there are wrong letters" do
      assert_equal true, @word.are_they_anagrams?("hellohowareyou", "hellohowareyou")
      assert_equal true, @word.are_they_anagrams?("howareyouhello", "hellohowareyou")
      assert_equal true, @word.are_they_anagrams?("hello", "ohell")
      assert_equal true, @word.are_they_anagrams?("yo", "ohell")
      assert_equal true, @word.are_they_anagrams?("yoloo", "ohell")
    end

  # test "checks to see if the guess is an anagram of the answer and tells the user if there are wrong letters" do
  #   assert_equal "The guess and answer are anagrams", @word.are_they_anagrams?("hellohowareyou", "hellohowareyou")
  #   assert_equal "The guess and answer are anagrams", @word.are_they_anagrams?("howareyouhello", "hellohowareyou")
  #   assert_equal "The guess and answer are NOT anagrams", @word.are_they_anagrams?("hello", "ohell")
  # end

end
