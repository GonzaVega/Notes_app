import { useCategories } from "../contexts/CategoriesContext.jsx";
import FilteredCategories from "../components/categoriesComponents/FilteredCategories.jsx";

const ActiveNotes = () => {
  const { categories } = useCategories();

  return (
    <div>
      <h2 style={{ marginBottom: "10px", color: "black" }}>Categories</h2>
      <FilteredCategories categories={categories} />
    </div>
  );
};

export default ActiveNotes;
