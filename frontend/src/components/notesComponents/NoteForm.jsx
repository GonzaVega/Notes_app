import { useState, useEffect } from "react";
import { useNotes } from "../../contexts/NotesContext";
import { useCategories } from "../../contexts/CategoriesContext";
import CategoryPill from "../../UI/CategoryPill";

const NoteForm = ({ initialData = {}, onClose }) => {
  const { handleCreate, handleUpdate } = useNotes();
  const { categories } = useCategories();

  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  const [categoryIds, setCategoryIds] = useState(initialData.categories || []);

  useEffect(() => {
    if (initialData.id) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");

      const extractedCategoryIds = (initialData.categories || []).map(
        (cat) => cat.id
      );
      setCategoryIds(extractedCategoryIds);
    }
  }, [initialData.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noteData = {
      note: {
        ...initialData,
        title,
        content,
        category_ids: categoryIds,
        tags: [],
      },
    };

    try {
      if (initialData.id) {
        await handleUpdate(initialData.id, noteData);
        onClose();
      } else {
        await handleCreate(noteData);
        onClose();
      }

      setTitle("");
      setContent("");
      setCategoryIds([]);
    } catch (error) {
      console.error("Error while saving:", error);
    }
    console.log("Note data:", noteData);
    console.log("Category IDs:", categoryIds);
  };

  const formTitle = initialData.id
    ? `Edit your note ${initialData.title}`
    : "Create Note";

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <h2>{formTitle}</h2>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          padding: "0.75rem",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{
          resize: "none",
          padding: "0.75rem",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          minHeight: "100px",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {categories.map((cat) => (
          <CategoryPill
            key={cat.id}
            category={cat}
            selected={categoryIds.includes(cat.id)}
            onToggle={(id) => {
              if (categoryIds.includes(id)) {
                setCategoryIds(categoryIds.filter((c) => c !== id));
              } else {
                setCategoryIds([...categoryIds, id]);
              }
            }}
            isSelectable={true}
          />
        ))}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "0.75rem",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
