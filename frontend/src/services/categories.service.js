import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/categories";

export const getCategories = async () => (await axios.get(API_URL)).data;
