import React, { useState } from 'react';
import '../../assets/css/mantenimiento.css';

const Mantenimento = () => {
  const [issueDescription, setIssueDescription] = useState('');

  const faqData = [
    {
      question: '¿Cómo actualizar mi información de contacto?',
      answer: 'Puedes actualizar tu información de contacto en la sección de ajustes de tu perfil.'
    },
    {
      question: '¿Cómo puedo cancelar mi membresía?',
      answer: 'Para cancelar tu membresía, visita la sección de "Ajustes" en tu perfil y sigue las instrucciones para cancelar tu suscripción.'
    },
    {
      question: '¿Cómo puedo obtener una factura de mis pagos?',
      answer: 'Para obtener una factura de tus pagos, ve a la sección de "Historial de Pagos" en tu perfil y busca la opción para descargar o imprimir tu factura.'
    },
    {
      question: '¿Cómo puedo reservar una clase?',
      answer: 'Para reservar una clase, inicia sesión en tu cuenta y visita la sección de "Clases". Desde allí, podrás ver el calendario de clases y seleccionar la que deseas reservar.'
    },
    {
      question: '¿Puedo compartir mi membresía con otras personas?',
      answer: 'Las membresías son personales y no se pueden compartir con otras personas. Cada usuario debe tener su propia cuenta y membresía.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Reporte enviado");

    setIssueDescription('');
  };
  const handleChange = (e) => {
    setIssueDescription(e.target.value);
  };

  return (
    <div className='main-maintenance'>
      <div className="support-maintenance">
        <div className="Bienvenido">
          <h1>Problemas y Mantenimiento</h1>
          <p>Bienvenido al área de Problemas y Mantenimiento. Aquí puedes encontrar información
            y soluciones para problemas técnicos, así como solicitar ayuda adicional si es
            necesario.</p>
        </div>
        <hr />
        <div className="problemas">
          <h2>Reportar un Problema</h2>
          <form id="report-form" onSubmit={handleSubmit}>
            <label htmlFor="issue" className='label-description'>Descripción del Problema:</label><br />
            <textarea 
              placeholder="Escribe aqui la descripcion del problema" 
              id="issue" 
              name="issue" 
              rows="10" 
              cols="80" 
              value={issueDescription} 
              onChange={handleChange} 
              required
            ></textarea><br />
            <button type="submit" className='button-problem'>Enviar Reporte</button>
          </form>
        </div>
        <hr />
        <h2>Preguntas Frecuentes</h2>
        <div className="faq">
          {faqData.map((item, index) => (
            <div key={index} className={`a${index + 2}`}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mantenimento;
