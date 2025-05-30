import { useNotes } from "../contexts/NotesContext.jsx";
import NoteList from "../components/notesComponents/NoteList.jsx";

const ArchivedNotes = () => {
  const { notes } = useNotes();

  const archived = notes.filter((note) => note.archived === true);

  return (
    <div>
      <h2 style={{ marginBottom: "10px", color: "red" }}>Archived Notes</h2>
      <NoteList notes={archived} />
    </div>
  );
};

export default ArchivedNotes;
