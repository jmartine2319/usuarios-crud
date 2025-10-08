import { useState } from 'react';
import './App.css';
import { BrowserRouter,NavLink, Routes, Route } from 'react-router';
import Usuarios from './components/Usuarios.jsx';
import CrearUsuarios from './components/CrearUsuarios.jsx';
import EditarUsuario from './components/EditarUsuario.jsx';
import Encabezado from './components/Encabezado.jsx';
import Login from './components/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth, AuthProvider } from './contexts/AuthContext.jsx';

function App() {
  const { user } = useAuth();
  const [usuarioUpdate, setUsuarioUpdate] = useState(null);

  return (
    <BrowserRouter>
      {!user ? (
            <Login />
          ) : (
        <div>
            
            <header>
              <Encabezado />
            </header>
            
            <main>
            
              <Routes>
                <Route path="/" element={<Usuarios />} />
                <Route path="/login" element={<Login />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/crearUsuarios" element={<CrearUsuarios />} />
                <Route path="/editarUsuarios/:id" element={<EditarUsuario actualizarUsuario={usuarioUpdate} />} />
              </Routes>
            </main>
        </div>
      )};
    </BrowserRouter>
  )
}

export default App
