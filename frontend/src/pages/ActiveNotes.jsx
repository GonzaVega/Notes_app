import { useNotes } from "../contexts/NotesContext.jsx";
import NoteList from "../components/notesComponents/NoteList.jsx";

const ActiveNotes = () => {
  const { notes } = useNotes();

  const active = notes.filter((note) => note.archived === false);

  return (
    <div>
      <h2 style={{ marginBottom: "10px", color: "green" }}>Active Notes</h2>
      <NoteList notes={active} />
    </div>
  );
};

export default ActiveNotes;
