import React from 'react';
import '../../assets/css/index.css';
import {Link} from 'react-router-dom';

const Index = () =>{
  return (
    <div id="container-index">
        <main>
            <div className="cards-container">
                <section className="card" id="membresia">
                <Link to='/Membresia'><img src={require('../../assets/img/index-img/Membresía.webp')} alt="Membresía" />
                    <p>Membresía</p></Link>
                </section>
                <section className="card" id="inscripcion">
                <Link to='/Clases'><img src={require('../../assets/img/index-img/clases.png')} alt="Inscripción en Clases" />
                    <p>Inscripción en Clases</p></Link>
                </section>
                <section className="card" id="pagos">
                <Link to='/Pagos'><img src={require('../../assets/img/index-img/pagos.webp')} alt="Pagos y Facturación" />
                    <p>Pagos y Facturación</p></Link>
                </section>
                <section className="card" id="progreso">
                <Link to='/Progreso'><img src={require('../../assets/img/index-img/progreso.webp')} alt="Progreso y Metas" />
                    <p>Progreso y Metas</p></Link>
                </section>
                <section className="card" id="calendario">
                    <Link to='/Calendario'><img src={require('../../assets/img/index-img/calendario.webp')} alt="Calendario" />
                    <p>Calendario</p></Link>
                </section>
                <section className="card" id="problemas">
                    <Link to='/Mantenimiento'><img src={require('../../assets/img/index-img/soporte.webp')} alt="Problemas y Mantenimiento" />
                    <p>Problemas y Mantenimiento</p></Link>
                </section>
            </div>
        </main>
    </div>
  )
}

export default Index
