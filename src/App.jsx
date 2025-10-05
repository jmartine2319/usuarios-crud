import { useState } from 'react'
import './App.css'
import { BrowserRouter,NavLink, Routes, Route } from 'react-router'
import Usuarios from './components/usuarios.jsx'
import CrearUsuarios from './components/CrearUsuarios.jsx'
import EditarUsuario from './components/EditarUsuario.jsx'
import Encabezado from './components/Encabezado.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  const [usuarioUpdate, setUsuarioUpdate] = useState(null);

  return (
    <BrowserRouter>
      <div>
        <header>
          <Encabezado />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Usuarios />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/crearUsuarios" element={<CrearUsuarios />} />
            <Route path="/editarUsuarios/:id" element={<EditarUsuario actualizarUsuario={usuarioUpdate} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
