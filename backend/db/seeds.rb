if User.count.zero?
  puts "🔄 No hay usuarios. Ejecutando seeds..."

  # Crear usuario inicial
  user = User.new(
    email: 'integrador@AYSO.com',
    password: 'password123',
    password_confirmation: 'password123',
    uid: 'integrador@AYSO.com',
    provider: 'email'
  )

  if user.save
    puts "✅ Usuario 'integrador@AYSO.com' creado."
  else
    puts "❌ Error al crear usuario: #{user.errors.full_messages.join(', ')}"
  end

  # Crear categorías
  categories = [
    { title: 'Work', description: 'Tasks and projects for work' },
    { title: 'Personal', description: 'Personal reminders and thoughts' },
    { title: 'Urgent', description: 'Urgent matters' },
    { title: 'Ideas', description: 'Ideas and brainstorming' },
    { title: 'Health', description: 'Health related notes' }
  ]

  categories.each do |attrs|
    category = Category.new(attrs)
    if category.save
      puts "✅ Categoría '#{category.title}' creada."
    else
      puts "❌ Error al crear categoría '#{category.title}': #{category.errors.full_messages.join(', ')}"
    end
  end

else
  puts "⏩ Ya existen usuarios. Seed no se ejecuta."
end
