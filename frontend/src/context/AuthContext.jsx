import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("studymega_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = ({ email }) => {
    const fakeUser = {
      name: "StudyMega User",
      email,
    };
    setUser(fakeUser);
    localStorage.setItem("studymega_user", JSON.stringify(fakeUser));
  };

  const register = ({ name, email }) => {
    const fakeUser = {
      name,
      email,
    };
    setUser(fakeUser);
    localStorage.setItem("studymega_user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("studymega_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
