import { NotesProvider } from "./contexts/NotesContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { AuthProvider } from "./contexts/AuthContext";

import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AuthProvider>
          <NotesProvider>
            <CategoriesProvider>
              <AppRoutes />
            </CategoriesProvider>
          </NotesProvider>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
