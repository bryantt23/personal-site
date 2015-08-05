require 'test_helper'

class CalculatorTest < ActiveSupport::TestCase

  def setup
    @calculator = Calculator.new
  end

  test "shows how many years until retirement for a 20 year old" do
    assert_equal 45, @calculator.how_long_until_retirement(20)
  end

  test "shows how many years until retirement for a 33 year old" do
    assert_equal 33, @calculator.how_long_until_retirement(32)
  end

  test "30 yo starts at 50000, puts $0 a year at 5% interest" do
    assert_equal 275800, @calculator.how_much_at_retirement(30, 50000, 0, 5)
  end

  test "20 yo starts at 10000, puts $0 a year at 10% interest" do
    assert_equal 728904, @calculator.how_much_at_retirement(20, 10000, 0, 10)
  end

  test "50 yo starts at 100000, puts $0 a year at 15% interest" do
    assert_equal 813706, @calculator.how_much_at_retirement(50, 100000, 0, 15)
  end

  test "40 yo starts at 50000, puts $0 a year at 20% interest" do
    assert_equal 4769810, @calculator.how_much_at_retirement(40, 50000, 0, 20)
  end




  #
  # test "20 yo starts at 0, puts $1000 a year at 0% interest" do
  #   assert_equal 45000, @calculator.how_much_at_retirement(20, 0, 1000, 0)
  # end

  #
  # test "20 yo starts at 0, puts $500 a year at 10% interest" do
  #   assert_equal 359452, @calculator.how_much_at_retirement(20, 0, 500, 0)
  # end
  #
  # test "20 yo starts at 0, puts $1000 a year and it earns 5% interest" do
  #   assert_equal 159700, @calculator.how_much_at_retirement(20, 0, 1000, 5)
  # end
  #
  #
  # test "40 yo starts at 10000, puts $5000 a year and it earns 15% interest" do
  #   assert_equal 1393155, @calculator.how_much_at_retirement(40, 10000, 5000, 15)
  # end
  # age, initial_contribution, yearly_contribution, annual_interest_rate)

end
