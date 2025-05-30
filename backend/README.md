# 📒 Notes API

Notes API is a **Ruby on Rails** backend application for managing notes and categories, with user authentication provided by `devise_token_auth`.

## 🚀 Features

- User registration and login (token-based)
- Create, read, update, and delete notes
- Assign multiple categories to a note (many-to-many relationship)
- Archive and unarchive notes
- Full CRUD for categories

---

## 🧱 Models

### 📝 Note

| Attribute   | Type     | Description                        |
|-------------|----------|------------------------------------|
| `title`     | string   | Note title (required)              |
| `content`   | text     | Note content                       |
| `archived`  | boolean  | Archive flag (default: false)      |
| `created_at`, `updated_at` | datetime | Timestamps        |

Relationship: A note can belong to many categories (`has_and_belongs_to_many`)

### 🗂️ Category

| Attribute     | Type   | Description                         |
|---------------|--------|-------------------------------------|
| `title`       | string | Category title (required)           |
| `description` | text   | Description                         |

Relationship: A category can have many notes (`has_and_belongs_to_many`)

### 👤 User (Authentication)

Provided by `devise_token_auth`. Users authenticate via tokens and can access their notes and categories.

---

## 🔐 Authentication

Authentication is handled via `devise_token_auth`. Main endpoints include:

| Method | Route                   | Action                   |
|--------|-------------------------|--------------------------|
| POST   | `/auth`                 | User registration        |
| POST   | `/auth/sign_in`         | Login                    |
| DELETE | `/auth/sign_out`        | Logout                   |
| GET    | `/auth/validate_token`  | Validate active session  |

> All protected routes require authentication headers: `access-token`, `client`, and `uid`.

---

## 🌐 REST API

### Notes (`/api/v1/notes`)

| Method | Route                             | Action                  |
|--------|------------------------------------|-------------------------|
| GET    | `/api/v1/notes`                   | List all notes          |
| POST   | `/api/v1/notes`                   | Create a new note       |
| GET    | `/api/v1/notes/:id`               | Show a specific note    |
| PATCH  | `/api/v1/notes/:id`               | Update a note           |
| PUT    | `/api/v1/notes/:id`               | Update a note           |
| DELETE | `/api/v1/notes/:id`               | Delete a note           |
| PATCH  | `/api/v1/notes/:id/archive`       | Archive a note          |
| PATCH  | `/api/v1/notes/:id/unarchive`     | Unarchive a note        |

### Categories (`/api/v1/categories`)

| Method | Route                                | Action                     |
|--------|----------------------------------------|----------------------------|
| GET    | `/api/v1/categories`                 | List all categories         |
| POST   | `/api/v1/categories`                 | Create a new category       |
| GET    | `/api/v1/categories/:id`             | Show a specific category    |
| PATCH  | `/api/v1/categories/:id`             | Update a category           |
| PUT    | `/api/v1/categories/:id`             | Update a category           |
| DELETE | `/api/v1/categories/:id`             | Delete a category           |

---

## 🗄️ Database Structure

- `notes` → stores notes
- `categories` → stores categories
- `categories_notes` → join table for the many-to-many relationship
- `users` → authenticated users

---
