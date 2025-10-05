import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Encabezado() {
    return (
         <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Menu</a>
                    <span className="navbar-toggler-icon"></span>
                    <div id="navbarNavAltMarkup">
                        <div>
                            <a className="nav-link active" aria-current="page" href="/usuarios">Usuarios</a>
                            <br></br>
                            <a className="nav-link" href="/crearUsuarios">Crear Usuarios</a>
                            <br></br>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}