import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/footer.css';

const Footer = () => {
  return (
    <div id='container-footer'>
        <footer id="footer">
            <nav className="footer-nav">
                <Link>Términos y Condiciones</Link>
                <Link>Política de Privacidad</Link>
            </nav>
            <div className="contacto">
                <p className="p-bienvenida">Gimnasio Universitario</p>
                <p className="p-bienvenida">Dirección: Calle 12, Vía San Mateo</p>
                <p className="p-bienvenida">Teléfono: 444-6957</p>
                <p className="p-bienvenida">Email: gimnasio@hotmail.com</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
