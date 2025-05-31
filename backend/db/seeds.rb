# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
user = User.find_or_initialize_by(email: 'integrador@AYSO.com')
if user.new_record?
  user.password = 'password123'
  user.password_confirmation = 'password123'
  user.save!
  puts "User test@ensolvers.com created."
else
  puts "User test@ensolvers.com already exists."
end

[
  { title: 'Work', description: 'Tasks and projects for work' },
  { title: 'Personal', description: 'Personal reminders and thoughts' },
  { title: 'Urgent', description: 'Urgent matters' },
  { title: 'Ideas', description: 'Ideas and brainstorming' },
  { title: 'Health', description: 'Health related notes' }
].each do |attrs|
  Category.find_or_create_by!(title: attrs[:title]) do |c|
    c.description = attrs[:description]
  end
end