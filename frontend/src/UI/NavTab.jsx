import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import "./NavTab.css";

const NavTab = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const tabs = [
    { label: "Home", path: "/" },
    { label: "Active Notes", path: "/active" },
    { label: "Archived Notes", path: "/archived" },
    { label: "Categories", path: "/categories" },
  ];

  const handleLogout = async () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="nav-container">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `nav-tab${isActive ? " nav-tab-active" : ""}`
          }
        >
          {tab.label}
        </NavLink>
      ))}

      <button className="nav-tab logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default NavTab;
