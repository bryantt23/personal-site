require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Bryant Tunbutr | Web Developer"
  end

  test "should get resources" do
    get :resources
    assert_response :success
    assert_select "title", "Resources | Bryant Tunbutr's Webpage"
  end

  test "should get carousel" do
    get :carousel
    assert_response :success
    assert_select "title", "Carousel Images | Bryant Tunbutr's Webpage"
  end

    test "should get projects page" do
      get :projects
      assert_response :success
      assert_select "title", "Projects | Bryant Tunbutr's Webpage"
    end
end
