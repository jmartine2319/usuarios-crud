import { useState, useEffect } from 'react'
import { gestionUsuarios } from "../hooks/useUsers";
import { Link, useNavigate } from 'react-router';
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
      <div className="card__hdr">
        <h1>Usuarios</h1>
        <div className="botonCrear">
            <Link to="/login" className="btn">Crear nuevo usuario</Link>
        </div>
        
      </div>
        <ul className='grid'>
            {
                usuarios.map((u)=>(
                    <li key={u.id} className='item'>
                        <div >
                            <h2>{u.nombre}</h2>
                            <p>{u.correo}</p>
                        </div>
                        <div>
                            <button className="btn btn--primary" onClick={() => navigate(`/editarUsuarios/${u.identificacion}`, { state: u })}>Editar</button>
                            <button className="btn btn--danger" onClick={() => borrarUsuario(u.identificacion)}>Eliminar</button>

                        </div>
                    </li>
                )
                )
            }
        </ul>
    </div>
  );
}