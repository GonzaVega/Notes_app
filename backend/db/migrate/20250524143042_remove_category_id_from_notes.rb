class RemoveCategoryIdFromNotes < ActiveRecord::Migration[7.1]
  def change
    remove_column :notes, :category_id, :bigint
  end
end
