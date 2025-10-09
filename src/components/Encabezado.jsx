import { Link } from 'react-router';
import './Encabezado.css';
import { NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext.jsx';
export default function Encabezado() {
    const { user, logout } = useAuth();
    console.log('Usuario en Encabezado:', user);
    return (
         <header>
            {
                user ? (
                <nav>
                    <div className="encabezado-container">
                        <a >Bienvenido {user.email}</a>
                        <span className=""></span>
                        <NavLink to="/usuarios">Consultar Usuarios</NavLink>
                        <NavLink to="/crearUsuarios">Crear Usuarios</NavLink>
                        <a className="cerrar-sesion" onClick={logout}><NavLink to="/login">Cerrar sesion</NavLink></a>
                    </div>
                </nav>
                ) : (
                    <div className="alert alert-warning" role="alert">
                        Por favor, inicie sesión para ver el menú.
                        <a className="nav-link active" aria-current="page" href="/login">Iniciar sesion</a>
                    </div>
                )
            }
        </header>
    );
}