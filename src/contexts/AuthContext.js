import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => { 
    console.log({ token });
    if (!token) {
      navigate("/login");
    }
    else {
      navigate("/")
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
