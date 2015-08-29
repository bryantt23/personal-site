json.array!(@flashcards) do |flashcard|
  json.extract! flashcard, :id, :question, :answer
  json.url flashcard_url(flashcard, format: :json)
end
