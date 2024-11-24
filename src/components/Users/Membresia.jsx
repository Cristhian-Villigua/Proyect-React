import React from 'react';
import '../../assets/css/membresia.css';
import { useNavigate } from 'react-router-dom';

const Membresia = () => {
  const navigate = useNavigate();
  const plans = [
    { name: 'Plan por Día', image: require('../../assets/img/membresia-img/DIA.png') },
    { name: 'Plan Mensual', image: require('../../assets/img/membresia-img/mensual.png') },
    { name: 'Plan Trimestral', image: require('../../assets/img/membresia-img/trimestral.png') },
    { name: 'Plan Semestral', image: require('../../assets/img/membresia-img/semestral.png') },
    { name: 'Plan Anual', image: require('../../assets/img/membresia-img/anual.png') },
  ];

  const benefits = [
    {
      title: 'Membresía por Día',
      image: require('../../assets/img/membresia-img/DIA.png'),
      details: [
        'Acceso Ilimitado a Equipos de Gimnasio: Utiliza todos los equipos de gimnasio sin restricciones durante el día de tu membresía.',
        'Sin acceso a inscribirse a clases Grupales: La membresía diaria no incluye la opción de inscribirse en las clases grupales del gimnasio.',
      ]
    },
    {
      title: 'Membresía por Mes',
      image: require('../../assets/img/membresia-img/mensual.png'),
      details: [
        'Acceso Ilimitado a Equipos de Gimnasio: Acceso completo a todos los equipos y máquinas de gimnasio durante el mes.',
        'Acceso a inscribirse a Clases Grupales: Participa en todas las clases grupales ofrecidas, como yoga, spinning, y más.',
        'Uso de la Piscina y Sauna: Disfruta del uso ilimitado de la piscina y las instalaciones de sauna durante todo el mes.',
        'Descuento en Eventos Especiales (5%): Recibe un 5% de descuento en todos los eventos especiales organizados por el gimnasio, como talleres y seminarios.',
      ]
    },
    {
      title: 'Membresía Trimestral',
      image: require('../../assets/img/membresia-img/trimestral.png'),
      details: [
        'Acceso Ilimitado a Equipos de Gimnasio: Uso ilimitado de todos los equipos de gimnasio durante tres meses.',
        'Acceso a inscribirse a Clases Grupales: Participa en todas las clases grupales sin costo adicional.',
        'Uso de la Piscina y Sauna: Acceso libre a la piscina y sauna durante todo el trimestre.',
        'Descuento en Eventos Especiales (10%): Disfruta de un 10% de descuento en eventos especiales organizados por el gimnasio.',
        'Una Sesión Gratuita con un Entrenador Personal: Recibe una sesión de entrenamiento personalizado gratuita.',
      ]
    },
    {
      title: 'Membresía Semestral',
      image: require('../../assets/img/membresia-img/semestral.png'),
      details: [
        'Acceso Ilimitado a Equipos de Gimnasio: Uso sin restricciones de todos los equipos y máquinas del gimnasio durante seis meses.',
        'Acceso a inscribirse a Clases Grupales: Acceso completo a todas las clases grupales.',
        'Uso de la Piscina y Sauna: Disfruta de la piscina y sauna sin límites durante el semestre.',
        'Descuento en Eventos Especiales (15%): Obtén un 15% de descuento en todos los eventos especiales.',
        'Tres Sesiones Gratuitas con un Entrenador Personal: Aprovecha tres sesiones de entrenamiento personal gratuitas.',
        'Acceso Prioritario a Nuevas Clases: Inscríbete primero en nuevas clases y actividades antes de que se abran al público general.',
      ]
    },
    {
      title: 'Membresía Anual',
      image: require('../../assets/img/membresia-img/anual.png'),
      details: [
        'Acceso Ilimitado a Equipos de Gimnasio: Acceso completo y sin restricciones a todas las instalaciones y equipos del gimnasio durante un año entero.',
        'Acceso a inscribirse a Clases Grupales: Participa en cualquier clase grupal que desees sin costo adicional durante el año.',
        'Uso de la Piscina y Sauna: Utiliza la piscina y las instalaciones de sauna sin límites durante todo el año.',
        'Descuento en Eventos Especiales (20%): Recibe un 20% de descuento en todos los eventos especiales organizados por el gimnasio.',
        'Seis Sesiones Gratuitas con un Entrenador Personal: Aprovecha seis sesiones de entrenamiento personal sin costo adicional.',
        'Acceso Prioritario a Nuevas Clases: Inscríbete primero en nuevas clases y actividades antes de que se abran al público general.',
        'Descuento del 10% en Productos de la Tienda del Gimnasio: Obtén un 10% de descuento en todos los productos de la tienda del gimnasio, incluyendo ropa deportiva, suplementos, y accesorios de fitness.',
      ]
    }
  ];
  const handleBuyPlan = (planName) => {
    navigate(`/pagos?plan=${planName}`);
  };

  return (
    <div id="container-membresia">
      <div className="info-container">
        <h2 className="section-title-membre">Información General</h2>
        <div className="general-info-membre">
          <p>Estado de la membresía: Inactiva</p>
          <p>Tipo de membresía: Nada</p>
          <p>Fecha de inicio y fecha de vencimiento de la membresía: Nada</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="buttons-container-membre">
        <button className="renew-button-membre">Renovar Membresía</button>
        <button className="cancel-button-membre">Cancelar Membresía</button>
      </div>

      <hr className="divider" />

      <div className="plans-membre">
        <h2 className="section-title-membre">Planes de Membresía</h2>
        <div className="plan-cards-membre">
          {plans.map((plan, index) => (
            <div className="plan-card-membre" key={index}>
              <img src={plan.image} alt={plan.name} />
              <button onClick={() => handleBuyPlan(plan.name)}>Comprar</button>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      <div className="combined-plans-membre">
        <h2 className="section-title-membre">Beneficios de la Membresía</h2>
        <div className="benefits-membre">
          {benefits.map((benefit, index) => (
            <div className="benefit-membre" key={index}>
              <h3>{benefit.title}</h3>
              <div className="benefit-content-membre">
                <img src={benefit.image} alt={benefit.title} />
                <ul>
                  {benefit.details.map((detail, idx) => (
                    <li key={idx}><b>- {detail}</b></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membresia;
