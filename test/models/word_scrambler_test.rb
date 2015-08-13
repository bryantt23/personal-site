require 'test_helper'

class WordScramblerTest < ActiveSupport::TestCase

  def setup
    @word = WordScrambler.new
  end

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
    assert_equal false, @word.are_they_anagrams?("yo", "ohell")
    assert_equal false, @word.are_they_anagrams?("yoloo", "ohell")
  end

  test "checks to see if the original word is an anagram of the scrambled word" do
    assert_equal true, @word.are_they_anagrams?("hellohowareyou", @word.scramble_word("hellohowareyou"))
    assert_equal true, @word.are_they_anagrams?("howareyouhello", @word.scramble_word("hellohowareyou"))
    assert_equal true, @word.are_they_anagrams?("howareyouhello", @word.scramble_word("hellohowareyou"))
    assert_equal true, @word.are_they_anagrams?("heyou", @word.scramble_word("heyou"))
  end

  test "checks to see if the guess is the same as the answer" do
    assert_equal true, @word.are_they_the_same_word?("hellohowareYOU", "hellohowareYOU")
    assert_equal false, @word.are_they_the_same_word?("howareyou", "hellohowareYOU")
    assert_equal false, @word.are_they_the_same_word?("how", "oh")
  end

  test "checks to see if the guess is the same as the answer even if the case is different" do
    assert_equal true, @word.are_they_the_same_word?("hellohowareYOU", "hellohowareYOU")
    assert_equal true, @word.are_they_the_same_word?("HOWareyouhello", "HOWAREYOUHELLO")
    assert_equal true, @word.are_they_the_same_word?("howareyouhello", "HOWAREYOUHELLO")
    assert_equal true, @word.are_they_the_same_word?("HOWAREYOUHELLO", "howareyouhello")
    assert_equal false, @word.are_they_the_same_word?("how", @word.scramble_word("oh"))
  end

  test "checks to see if the guess is the same as the answer even if there is whitespace" do
    assert_equal true, @word.are_they_the_same_word?("hello    howareYOU", "hellohowareyou")
    assert_equal true, @word.are_they_the_same_word?("HOWare     youhello", "HOWAREYOUHELLO")
    assert_equal true, @word.are_they_the_same_word?("howareyouhello     ", "HOWAREYOUHELLO")
    assert_equal true, @word.are_they_the_same_word?("HOW ARE YOU HELLO", "howareyouhello")
    assert_equal false, @word.are_they_the_same_word?("how", "oh")
  end

  test "checks to see if the answer's anagram is shown in alphabetical order" do
    assert_equal "ehllo", @word.answer_in_alpha_order("hello")
    assert_equal "aabb", @word.answer_in_alpha_order("baba")
    assert_equal "eel", @word.answer_in_alpha_order("eel")
    assert_equal "a", @word.answer_in_alpha_order("a")
    assert_equal "ott", @word.answer_in_alpha_order("tot")
  end


  test "add wrong answer to array if it is empty" do
    assert_equal ["yolo"], @word.add_wrong_answer("yolo", "hey")
  end

  #
  # test "add wrong answer to array if it is not there" do
  #   @word.add_wrong_answer("yolo", "hey")
  #     # assert_equal ["yolo"], @word.add_wrong_answer("yolo", "hey")
  #     @word.my_array=["yolo"]
  #   assert_equal ["yolo", "booyah"], @word.add_wrong_answer("booyah", "hey")
  # end
  #
  # test "do NOT add wrong answer to array if it is already there" do
  #   assert_equal ["yolo", "booyah"], @word.add_wrong_answer("yolo", "hey")
  # end


  # test "checks to see if the guess is an anagram of the answer and tells the user if there are wrong letters" do
  #   assert_equal "The guess and answer are anagrams", @word.are_they_anagrams?("hellohowareyou", "hellohowareyou")
  #   assert_equal "The guess and answer are anagrams", @word.are_they_anagrams?("howareyouhello", "hellohowareyou")
  #   assert_equal "The guess and answer are NOT anagrams", @word.are_they_anagrams?("hello", "ohell")
  # end

end
