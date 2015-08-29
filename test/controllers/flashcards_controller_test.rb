require 'test_helper'

class FlashcardsControllerTest < ActionController::TestCase
  setup do
    @flashcard = flashcards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:flashcards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create flashcard" do
    assert_difference('Flashcard.count') do
      post :create, flashcard: { answer: @flashcard.answer, question: @flashcard.question }
    end

    assert_redirected_to flashcard_path(assigns(:flashcard))
  end

  test "should show flashcard" do
    get :show, id: @flashcard
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @flashcard
    assert_response :success
  end

  test "should update flashcard" do
    patch :update, id: @flashcard, flashcard: { answer: @flashcard.answer, question: @flashcard.question }
    assert_redirected_to flashcard_path(assigns(:flashcard))
  end

  test "should destroy flashcard" do
    assert_difference('Flashcard.count', -1) do
      delete :destroy, id: @flashcard
    end

    assert_redirected_to flashcards_path
  end
end
