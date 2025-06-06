class CreateJoinTableNotesCategories < ActiveRecord::Migration[7.1]
  def change
    create_join_table :notes, :categories do |t|
      t.index [:note_id, :category_id]
      t.index [:category_id, :note_id]
    end
  end
end
