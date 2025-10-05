import { useState } from "react";
export function gestionUsuarios() {
  const [mensaje, setMensaje] = useState("Gestion de Usuarios");
  // Aquí puedes implementar la lógica para gestionar usuarios
  const guardarUsuario = (usuario) => {
    console.log('crear user hook', usuario);
    // Obtener la lista actual de usuarios
    let usuariosRaw = sessionStorage.getItem('usuarios');
    let usuarios;
    try {
      usuarios = usuariosRaw ? JSON.parse(usuariosRaw) : [];
      if (!Array.isArray(usuarios)) usuarios = [];
    } catch {
      usuarios = [];
    }
    // Agregar el nuevo usuario
    usuarios.push(usuario);
    // Guardar la lista actualizada en sessionStorage
    sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
    setMensaje(`Usuario creado: ${usuario.nombre}`);
  };
  const modificarUsuario = (usuario) => {
    console.log('editar user hook', usuario);
    let usuariosRaw = sessionStorage.getItem('usuarios');
    let usuarios;
    usuarios = usuariosRaw ? JSON.parse(usuariosRaw) : [];
    if (!Array.isArray(usuarios)) usuarios = [];

    // Buscar el usuario a editar
    const index = usuarios.findIndex((u) => u.identificacion === usuario.identificacion);
    if (index !== -1) {
      // Actualizar el usuario
      usuarios[index] = usuario;
      // Guardar la lista actualizada en sessionStorage
      sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
      setMensaje(`Usuario editado: ${usuario.nombre}`);
    }
  };

  const consultarUsuario = (usuario) => {
    const item = window.sessionStorage.getItem('usuarios');
    let usuarios = item != null ? JSON.parse(item) : [];
    return usuarios.filter((u) => u.identificacion === usuario.identificacion);
    //setMensaje(`Usuario editado: ${usuario}`);
  };

  const obtenerTodosUsuarios = () => {
    const item = window.sessionStorage.getItem('usuarios');
    console.log('item', item);
    return  item != null ? JSON.parse(item) : [];
  };

  const eliminarUsuario = (id) => {
    setMensaje(`Usuario eliminado: ${id}`);
    let usuariosRaw = sessionStorage.getItem('usuarios');
    let usuarios = JSON.parse(usuariosRaw);
    if (!Array.isArray(usuarios)) usuarios = [];
    // Filtrar el usuario eliminado
    usuarios = usuarios.filter((u) => u.identificacion !== id);
    // Guardar la lista actualizada en sessionStorage
    sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
  };

  const listarUsuarios = () => {
    setMensaje("Lista de usuarios");
  };
  return { mensaje, guardarUsuario, modificarUsuario,consultarUsuario, obtenerTodosUsuarios, eliminarUsuario, listarUsuarios };
}