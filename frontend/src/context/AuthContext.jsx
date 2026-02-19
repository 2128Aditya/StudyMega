import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../services/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("studymega_user");
    const savedToken = localStorage.getItem("studymega_token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  const register = async ({ name, email, password }) => {
    const data = await registerUser({ name, email, password });

    localStorage.setItem("studymega_user", JSON.stringify(data.user));
    localStorage.setItem("studymega_token", data.token);

    setUser(data.user);
    setToken(data.token);

    return data;
  };

  const login = async ({ email, password }) => {
    const data = await loginUser({ email, password });

    localStorage.setItem("studymega_user", JSON.stringify(data.user));
    localStorage.setItem("studymega_token", data.token);

    setUser(data.user);
    setToken(data.token);

    return data;
  };

  const logout = () => {
    localStorage.removeItem("studymega_user");
    localStorage.removeItem("studymega_token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
