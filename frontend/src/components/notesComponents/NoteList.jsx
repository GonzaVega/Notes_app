import { useState } from "react";
import NoteItem from "./NoteItem";
import NoteForm from "./NoteForm";
import Modal from "../../UI/Modal";

const NoteList = ({ notes, onRefresh, onEdit, onDelete, onArchiveToggle }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleCreate = async (note) => {
    await onEdit(note);
    closeModal();
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={openModal} style={plusButtonStyle}>
        +
      </button>

      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
            onArchiveToggle={onArchiveToggle}
          />
        ))
      ) : (
        <p>Notes list is empty</p>
      )}

      {showModal && (
        <Modal onClose={closeModal}>
          <NoteForm onSubmit={handleCreate} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

const plusButtonStyle = {
  fontSize: "1.5rem",
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "#007BFF",
  color: "white",
  cursor: "pointer",
  marginBottom: "0.5rem",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

export default NoteList;
