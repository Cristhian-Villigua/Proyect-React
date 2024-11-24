import React, { useState, useEffect } from 'react';
import '../../assets/css/clases.css';

const Clases = () => {
  const [misClases, setMisClases] = useState([]);
  const [clases, setClases] = useState([
    {
      tipo: 'Yoga',
      sesiones: [
        { instructor: 'Albertho Lopez', dia: 'En la mañana', hora: '08:00 am a 9:30 am', ubicacion: 'Sala de Yoga', plazas: 15 },
        { instructor: 'Maria González', dia: 'En la tarde', hora: '13:00 pm a 14:30 pm', ubicacion: 'Sala de Yoga', plazas: 7 },
        { instructor: 'Luisa Fernanda', dia: 'En la noche', hora: 'De 18:00 pm a 19:30 pm', ubicacion: 'Sala de Yoga', plazas: 6 },
      ]
    },
    {
      tipo: 'Pilates',
      sesiones: [
        { instructor: 'Ana Torres', dia: 'En la mañana', hora: '10:00 am a 11:30 am', ubicacion: 'Sala de Pilates', plazas: 9 },
        { instructor: 'Jorge Hernández', dia: 'En la tarde', hora: '16:00 pm a 17:30 pm', ubicacion: 'Sala de Pilates', plazas: 15 },
        { instructor: 'Patricia Morales', dia: 'En la noche', hora: 'De 20:00 pm a 21:30 pm', ubicacion: 'Sala de Pilates', plazas: 10 },
      ]
    },
    {
      tipo: 'Meditación',
      sesiones: [
        { instructor: 'Ricardo Gómez', dia: 'En la mañana', hora: 'De 06:00 am a 07:00 am', ubicacion: 'Sala de Meditación', plazas: 12 },
        { instructor: 'Elena Fernández', dia: 'En la tarde', hora: 'De 15:00 pm a 16:00 pm', ubicacion: 'Sala de Meditación', plazas: 14 },
        { instructor: 'Francisco Rivas', dia: 'De 19:00 pm a 20:00 pm', ubicacion: 'Sala de Meditación', plazas: 5 },
      ]
    },
    {
      tipo: 'Baile Terapia',
      sesiones: [
        { instructor: 'Laura Martínez', dia: 'En la mañana', hora: 'De 11:30 am a 12:30 pm', ubicacion: 'Sala de Baile Terapia', plazas: 6 },
        { instructor: 'David Sánchez', dia: 'En la noche', hora: 'De 20:00 pm a 21:40 pm', ubicacion: 'Sala de Baile Terapia', plazas: 5 },
      ]
    }
  ]);

  useEffect(() => {
    const clasesInscritas = JSON.parse(localStorage.getItem('misClases')) || [];
    setMisClases(clasesInscritas);
  }, []);

  useEffect(() => {
    localStorage.setItem('misClases', JSON.stringify(misClases));
  }, [misClases]);

  const hanldeClearmisClases = () => {
    setMisClases([]);
    localStorage.removeItem('misClases');
    alert(`La clase ha sido cancelada con éxito.`);
  }

  const handleInscripcion = (claseTipo, sesionIndex) => {
    const nuevaSesion = clases.find(clase => clase.tipo === claseTipo).sesiones[sesionIndex];

    const yaInscrito = misClases.some(clase => clase.tipo === claseTipo && clase.sesionIndex === sesionIndex);
    if (yaInscrito) {
      alert('Ya estás inscrito en esta clase.');
      return;
    }

    if (nuevaSesion.plazas > 0) {
      nuevaSesion.plazas -= 1;

      setClases(prevClases => 
        prevClases.map(clase =>
          clase.tipo === claseTipo
            ? {
                ...clase,
                sesiones: clase.sesiones.map((sesion, index) =>
                  index === sesionIndex ? { ...sesion, plazas: nuevaSesion.plazas } : sesion
                )
              }
            : clase
        )
      );

      setMisClases(prevMisClases => [
        ...prevMisClases,
        { tipo: claseTipo, sesionIndex, ...nuevaSesion }
      ]);
    } else {
      alert('No hay plazas disponibles para esta clase.');
    }
  };

  return (
    <div id='container-class'>
      <div className="plans-class">
        <h2 className='title-class-h2'>Tipos de clases disponibles</h2>
        <div className="plan-cards-class">
          <div className="plan-card-class">
            <img src={require('../../assets/img/clases-img/yoga.webp')} alt="Yoga" />
            <h3>Yoga</h3>
          </div>
          <div className="plan-card-class">
            <img src={require('../../assets/img/clases-img/pilates.webp')} alt="Pilates" />
            <h3>Pilates</h3>
          </div>
          <div className="plan-card-class">
            <img src={require('../../assets/img/clases-img/meditar.webp')} alt="Meditación" />
            <h3>Meditación</h3>
          </div>
          <div className="plan-card-class">
            <img src={require('../../assets/img/clases-img/baile.webp')} alt="Baile" />
            <h3>Baile Terapia</h3>
          </div>
        </div>
      </div>

      <hr className="divider-class" />
      <h2 className='title-class-h2'>Inscripción</h2>
      {clases.map((clase, index) => (
        <div key={index} className="benefits-class">
          <h1>{clase.tipo}</h1>
          <div className="benefit-hola-class">
            {clase.sesiones.map((sesion, sesionIndex) => (
              <div key={sesionIndex} className="benefit-class">
                <div className="Inf-class">
                  <ul>
                    <li><b>Instructor/a:</b> {sesion.instructor}</li>
                    <li><b>Dia:</b> {sesion.dia}</li>
                    <li><b>Hora:</b> {sesion.hora}</li>
                    <li><b>Ubicacion:</b> {sesion.ubicacion}</li>
                    <li><b>Plazas disponibles:</b> {sesion.plazas}</li>
                  </ul>
                </div>
                <button 
                  className="boton-class" 
                  onClick={() => handleInscripcion(clase.tipo, sesionIndex)}
                  disabled={sesion.plazas === 0}
                >
                  <b>Inscribirse</b>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <hr className='divider-class'/>
      <h2 className='title-class-h2'>Clases Inscritas</h2>
      <div className="mis-clases-class">
        <h2 className='title-class-h2'>Mis Clases:</h2>
        <table>
          <thead>
            <tr>
              <th className='title-th'>Nombre de la Clase</th>
              <th className='title-th'>Fecha y Hora</th>
              <th className='title-th'>Ubicación</th>
              <th className='title-th'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {misClases.map((clase, index) => (
              <tr key={index}>
                <td>{clase.tipo}</td>
                <td>{clase.dia} {clase.hora}</td>
                <td>{clase.ubicacion}</td>
                <td><button className="cancelar-class"onClick={hanldeClearmisClases} ><b>Cancelar</b></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clases;
