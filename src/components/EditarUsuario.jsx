import { useParams,useLocation } from "react-router";
import { gestionUsuarios } from "../hooks/useUsers";
import { useState } from "react";
import "./EditarUsuario.css"
export default function EditarUsuario() {
    const location = useLocation();
    const usuario = location.state;
    const { modificarUsuario } = gestionUsuarios();
    const [identificacion, setIdentificacion] = useState(usuario?.identificacion || "");
    const [nombre, setNombre] = useState(usuario?.nombre || "");
    const [direccion, setDireccion] = useState(usuario?.direccion || "");
    const [telefono, setTelefono] = useState(usuario?.telefono || "");
    const [correo, setCorreo] = useState(usuario?.correo || "");
    const { id } = useParams();

    function submit(e) {
        e.preventDefault();
        if(!identificacion.trim() || !nombre.trim()) return alert("Todos los campos son obligatorios");
        modificarUsuario({ identificacion, nombre, correo, telefono, direccion });
        //editarUsuario(e);
    }

    return (
        <div>
            <h1>Editar Usuario</h1>
            <p>ID del usuario: {id} nombre {usuario?.correo}</p>
            <form onSubmit={submit} className="editar-usuario">
                <label>
                    Identificación: <input type="text" name="identificacion" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />
                </label>
                <label>
                    Nombre: <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </label>
                <label>
                    Dirección: <input type="text" name="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </label>
                <label>
                    Telefono: <input type="text" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </label>
                <label>
                    Correo: <input type="email" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </label>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}