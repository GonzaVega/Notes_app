import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  accessToken: null,
  client: null,
  uid: null,
  userName: null,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [client, setClient] = useState(localStorage.getItem("client"));
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(uid));

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:4000/auth/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const token = response.headers.get("access-token");
        const uid = response.headers.get("uid");
        const client = response.headers.get("client");

        const data = await response.json();

        if (token && uid && client) {
          const extractedName = data?.data?.name || "";

          localStorage.setItem("accessToken", token);
          localStorage.setItem("uid", uid);
          localStorage.setItem("client", client);
          localStorage.setItem("userName", extractedName);

          setAccessToken(token);
          setUid(uid);
          setClient(client);
          setUserName(extractedName);
          setIsAuthenticated(true);

          return true;
        }
      }

      return false;
    } catch (error) {
      console.error("Error logging in", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (accessToken && client && uid) {
        headers["access-token"] = accessToken;
        headers["client"] = client;
        headers["uid"] = uid;
      }

      const response = await fetch("http://localhost:4000/auth/sign_out", {
        method: "DELETE",
        headers,
      });

      if (response.ok) {
        localStorage.clear();
        setAccessToken(null);
        setUid(null);
        setClient(null);
        setUserName(null);
        setIsAuthenticated(false);
      } else {
        console.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error en la solicitud de logout", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        accessToken,
        client,
        uid,
        userName,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
