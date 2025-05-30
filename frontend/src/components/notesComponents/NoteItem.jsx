import { useState } from "react";
import { useNotes } from "../../contexts/NotesContext";
import NoteForm from "./NoteForm";
import Modal from "../../UI/Modal";
import CategoryPill from "../../UI/CategoryPill";

function NoteItem({ note }) {
  const [isEditing, setIsEditing] = useState(false);

  const openEditModal = () => setIsEditing(true);
  const closeEditModal = () => setIsEditing(false);
  const { handleDelete, toggleArchive } = useNotes();

  const deleteHandler = async () => {
    await handleDelete(note.id);
  };

  const handleArchive = async () => {
    toggleArchive(note.id, note.archived);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "6px",
          padding: "1rem",
          marginBottom: "1rem",
          backgroundColor: note.archived ? "#f0f0f0" : "#ffffff",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>{note.title}</h3>
        <p style={{ marginBottom: "1rem" }}>{note.content}</p>
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          {note.categories?.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              selected={true}
              isSelectable={false}
              styleConfig={{
                padding: "0.2rem 0.5rem",
                borderRadius: "12px",
                fontSize: "0.75rem",
                margin: "0.1rem",
              }}
            />
          ))}
        </div>

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
        >
          <button onClick={openEditModal} style={buttonStyle}>
            Edit
          </button>
          <button
            onClick={() => deleteHandler(note.id)}
            style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
          >
            Delete
          </button>
          <button onClick={() => handleArchive(note.id)} style={buttonStyle}>
            {note.archived ? "Unarchive" : "Archive"}
          </button>
        </div>
      </div>

      {isEditing && (
        <Modal onClose={closeEditModal}>
          <NoteForm initialData={note} onClose={closeEditModal} />
        </Modal>
      )}
    </>
  );
}

const buttonStyle = {
  padding: "0.5rem 0.75rem",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default NoteItem;
