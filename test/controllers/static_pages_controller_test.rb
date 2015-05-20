require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Home | Bryant Tunbutr's Webpage"
  end

  test "should get resources" do
    get :resources
    assert_response :success
    assert_select "title", "Resources | Bryant Tunbutr's Webpage"
  end

    test "should get fun" do
      get :fun
      assert_response :success
      assert_select "title", "Fun | Bryant Tunbutr's Webpage"
    end

end
