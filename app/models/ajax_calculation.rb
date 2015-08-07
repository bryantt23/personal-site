class AjaxCalculation < ActiveRecord::Base

  # not an active record model

  def initialize(a=0, b=0)
    @a = a
    @b = b
  end

  def add
    @a + @b
  end

  def subtract
    @a - @b
  end

  def multiply
    @a * @b
  end

  def divide
    @a / @b
  end

  def exponent
    @a ** @b
  end
end
