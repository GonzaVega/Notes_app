class Category < ApplicationRecord
  # has_many :notes, dependent: :nullify
  has_and_belongs_to_many :notes

  validates :title, presence: true
end
