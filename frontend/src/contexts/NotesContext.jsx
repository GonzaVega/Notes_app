import { createContext, useContext, useState, useEffect } from "react";

import {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
  noteArchive,
  noteUnarchive,
} from "../services/notes.service";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const all = await getNotes();
      setNotes(all);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreate = async (note) => {
    await createNote(note);
    fetchNotes();
  };

  const handleUpdate = async (id, note) => {
    await updateNote(id, note);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  const toggleArchive = async (id, archived) => {
    try {
      !archived ? await noteArchive(id) : await noteUnarchive(id);
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        fetchNotes,
        handleCreate,
        handleUpdate,
        handleDelete,
        toggleArchive,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
