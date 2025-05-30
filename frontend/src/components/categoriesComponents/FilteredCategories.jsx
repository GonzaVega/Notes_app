import { useState, useMemo } from "react";
import { useNotes } from "../../contexts/NotesContext.jsx";
import NoteList from "../notesComponents/NoteList.jsx";
import CategoryPill from "../../UI/CategoryPill.jsx";
import { useCategories } from "../../contexts/CategoriesContext.jsx";

const FilteredCategories = () => {
  const { notes } = useNotes();
  const { categories } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);
  console.log("FilteredCategories", categories);
  console.log("FilteredCategories", notes);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const filteredNotes = useMemo(() => {
    if (selectedCategories.length === 0) {
      return notes;
    }

    return notes.filter((note) => {
      const noteCategoryIds = note.categories.map((cat) => cat.id);

      return selectedCategories.some((selectedId) =>
        noteCategoryIds.includes(selectedId)
      );
    });
  }, [notes, selectedCategories]);

  return (
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        {categories.map((category) => (
          <CategoryPill
            key={category.id}
            category={category}
            selected={selectedCategories.includes(category.id)}
            onToggle={toggleCategory}
            isSelectable={true}
          />
        ))}
      </div>

      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default FilteredCategories;
