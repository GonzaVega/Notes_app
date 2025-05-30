import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/notes";

export const getNotes = async () => (await axios.get(API_URL)).data;

export const createNote = async (note) =>
  (await axios.post(API_URL, note)).data;

export const updateNote = async (id, note) =>
  (await axios.put(`${API_URL}/${id}`, note)).data;

export const deleteNote = async (id) =>
  (await axios.delete(`${API_URL}/${id}`)).data;

export const noteArchive = async (id) =>
  (await axios.patch(`${API_URL}/${id}/archive`)).data;

export const noteUnarchive = async (id) =>
  (await axios.patch(`${API_URL}/${id}/unarchive`)).data;
