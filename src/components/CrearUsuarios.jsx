import { useState } from "react";
import { gestionUsuarios } from "../hooks/useUsers";
import "./CrearUsuarios.css"
export default function CrearUsuarios() {
  const { guardarUsuario } = gestionUsuarios();
  const [identificacion, setIdentificacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const submit = (e) => {
    console.log('crear user')
    e.preventDefault();
    if(!identificacion.trim() || !nombre.trim() || !correo.trim() || !telefono.trim() || !direccion.trim()) return alert("Todos los campos son obligatorios");
    alert(`Nombre: ${nombre}, Correo: ${correo}, Telefono: ${telefono}, Direccion: ${direccion}`);
    guardarUsuario({identificacion, nombre, correo, telefono, direccion });
    // Aquí puedes manejar la creación del nuevo usuario
 }
  return (

    <div className="tarjeta">

      <h1>Crear Usuarios</h1>

      <div>

        <form onSubmit={submit} className="crear-usuario">
          <label>
            Identificación:
            <input type="text" name="identificacion" 
            onChange={(e) => setIdentificacion(e.target.value)}/>
          </label>

          <label>
            Nombres:
            <input type="text" name="nombre" 
            onChange={(e) => setNombre(e.target.value)}/>
          </label>

          <label>
            Email:
            <input type="email" name="email" 
            onChange={(e) => setCorreo(e.target.value)}/>
          </label>

          <label>
            Telefono:
            <input type="text" name="telefono" 
            onChange={(e) => setTelefono(e.target.value)}/>
          </label>

          <label>
            Direccion:
            <input type="text" name="direccion" 
            onChange={(e) => setDireccion(e.target.value)}/>
          </label>

          <button type="submit">Crear</button>
        </form>

      </div>
      

    </div>
  )
}
