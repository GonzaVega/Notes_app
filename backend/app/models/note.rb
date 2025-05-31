class Note < ApplicationRecord
  # belongs_to :category, optional: true
  has_and_belongs_to_many :categories
  
  validates :title, presence: true
end
