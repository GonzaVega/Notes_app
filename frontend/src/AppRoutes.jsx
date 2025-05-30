import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

import NavTab from "./UI/NavTab";
import ArchivedNotes from "./pages/ArchivedNotes";
import ActiveNotes from "./pages/ActiveNotes";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route
              path="/*"
              element={
                <>
                  <NavTab />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/archived" element={<ArchivedNotes />} />
                    <Route path="/active" element={<ActiveNotes />} />
                    <Route path="/categories" element={<Categories />} />
                  </Routes>
                </>
              }
            />
          </>
        ) : (
          <Route path="/*" element={<Welcome />} />
        )}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
