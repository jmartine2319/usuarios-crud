import { Link } from 'react-router';
import './Encabezado.css';
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
                        
                        <a className="" aria-current="page" href="/usuarios">Consultar Usuarios</a>

                        <a className="" href="/crearUsuarios">Crear Usuarios</a>
                        
                        <a className="cerrar-sesion" href="/login" onClick={logout}>Cerrar sesion</a>
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