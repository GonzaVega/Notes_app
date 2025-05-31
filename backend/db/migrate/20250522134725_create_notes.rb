class CreateNotes < ActiveRecord::Migration[7.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :content
      t.boolean :archived, default: false
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
