require 'test_helper'

class LitebriteControllerTest < ActionController::TestCase
  test "should get litebrite" do
    get :litebrite
    assert_response :success
  end

end
