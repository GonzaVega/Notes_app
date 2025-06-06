require "test_helper"

class NotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @note = notes(:one)
  end

  test "should get index" do
    get notes_url, as: :json
    assert_response :success
  end

  test "should create note" do
    assert_difference("Note.count") do
      post notes_url, params: { note: { archived: @note.archived, category_id: @note.category_id, content: @note.content, title: @note.title } }, as: :json
    end

    assert_response :created
  end

  test "should show note" do
    get note_url(@note), as: :json
    assert_response :success
  end

  test "should update note" do
    patch note_url(@note), params: { note: { archived: @note.archived, category_id: @note.category_id, content: @note.content, title: @note.title } }, as: :json
    assert_response :success
  end

  test "should destroy note" do
    assert_difference("Note.count", -1) do
      delete note_url(@note), as: :json
    end

    assert_response :no_content
  end
end
