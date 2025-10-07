import { createContext, useEffect ,useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado inicial: no hay usuario logueado

  const login = (userData) => {
    // Aquí iría la lógica real de login, como una llamada a una API
    console.log('Iniciando sesión con:', userData);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Lógica de logout
    console.log('Cerrando sesión');
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const authValue = {
    user, // El estado actual del usuario
    login, // La función para iniciar sesión
    logout, // La función para cerrar sesión
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 2. Crear un hook personalizado (context/AuthContext.js)
export const useAuth = () => {
  return useContext(AuthContext);
};