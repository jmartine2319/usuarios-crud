import { useState, useEffect } from 'react'
import { gestionUsuarios } from "../hooks/useUsers";
import { useNavigate } from 'react-router';
import "./Usuarios.css";
export default function Usuarios() {
    const navigate = useNavigate();
    const { obtenerTodosUsuarios,eliminarUsuario } = gestionUsuarios();
    const [usuarios, setUsuarios] = useState([]);
    function borrarUsuario(id) {
        const nuevosUsuarios = usuarios.filter((u) => u.id !== id);
        if (confirm(`¿Desea eliminar el usuario con ID: ${id} ?`)) {
            setUsuarios(nuevosUsuarios);
            eliminarUsuario(id);
        }
    }
    useEffect(() => {
        const usuarios = obtenerTodosUsuarios();
        setUsuarios(usuarios);
    }, []);
  return (
    <div className='tarjeta-user'>
      <div className="titulo_usuario">
        <h1>Usuarios</h1>
        <br></br>
        <button className="boton_crear_p" onClick={() => navigate('/crearUsuarios')}>
            Crear nuevo usuario
        </button>
        
      </div>
      <div className='usuarios-table-container'>
        <table className="usuarios-table">
            <thead>
                <tr>
                    <th>Identificacion</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {
                usuarios.map((u)=>(

                    <tr key={u.id} className="usuarios-fila">
                        <td>{u.identificacion}</td>
                        <td>{u.nombre}</td>
                        <td>{u.correo}</td>
                        <td>
                            <button className="btn btn--primary" onClick={() => navigate(`/editarUsuarios/${u.identificacion}`, { state: u })}>Editar</button>
                            <button className="btn btn--danger" onClick={() => borrarUsuario(u.identificacion)}>Eliminar</button>
                        </td>
                    </tr>
                    
                )
                )
            }
            </tbody>
        </table>
      </div>
    </div>
  );
}