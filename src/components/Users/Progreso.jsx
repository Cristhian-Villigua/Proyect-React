import React, { useState, useEffect } from 'react';
import '../../assets/css/progreso.css';

const Progreso = () => {
  // Estado para manejar las metas, actividades, y estadísticas
  const [metasCompletadas, setMetasCompletadas] = useState(0);
  const [caloriasQuemadas, setCaloriasQuemadas] = useState(0);
  const [tiempoEjercicio, setTiempoEjercicio] = useState(0); // en minutos
  const [metasAlcanzadas, setMetasAlcanzadas] = useState([]);
  const [registroActividades, setRegistroActividades] = useState([]);

  // Cargar los datos desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedMetas = JSON.parse(localStorage.getItem('metasAlcanzadas')) || [];
    const storedActividades = JSON.parse(localStorage.getItem('registroActividades')) || [];

    setMetasAlcanzadas(storedMetas);
    setRegistroActividades(storedActividades);

    // Calcular metas completadas, calorías y tiempo de ejercicio
    const totalMetasCompletadas = storedMetas.length;
    const totalCalorias = storedActividades.reduce((total, actividad) => total + actividad.activityCalories, 0);
    const totalTiempo = storedActividades.reduce((total, actividad) => total + actividad.activityDuration, 0);

    setMetasCompletadas(totalMetasCompletadas);
    setCaloriasQuemadas(totalCalorias);
    setTiempoEjercicio(totalTiempo);
  }, []);

  // Función para guardar los datos en localStorage
  const saveDataToLocalStorage = () => {
    localStorage.setItem('metasAlcanzadas', JSON.stringify(metasAlcanzadas));
    localStorage.setItem('registroActividades', JSON.stringify(registroActividades));
  };

  // Función para manejar el formulario de nuevas metas
  const handleAddGoal = (e) => {
    e.preventDefault();
    const goalName = e.target['goal-name'].value;
    const goalTarget = e.target['goal-target'].value;

    if (goalName && goalTarget) {
      // Añadir nueva meta a la lista de metas alcanzadas
      const newMetas = [...metasAlcanzadas, { goalName, goalTarget }];
      setMetasAlcanzadas(newMetas);
      setMetasCompletadas(newMetas.length); // Actualizar el contador de metas completadas
      e.target.reset();

      // Guardar datos en localStorage
      saveDataToLocalStorage();
    }
  };

  // Función para manejar el formulario de actividades
  const handleAddActivity = (e) => {
    e.preventDefault();
    const activityName = e.target['activity-name'].value;
    const activityDuration = parseInt(e.target['activity-duration'].value, 10);
    const activityCalories = parseInt(e.target['activity-calories'].value, 10);

    if (activityName && !isNaN(activityDuration) && !isNaN(activityCalories)) {
      // Añadir nueva actividad al registro
      const newActivities = [
        ...registroActividades,
        { activityName, activityDuration, activityCalories },
      ];
      setRegistroActividades(newActivities);

      // Actualizar las estadísticas
      setCaloriasQuemadas(caloriasQuemadas + activityCalories);
      setTiempoEjercicio(tiempoEjercicio + activityDuration); // Sumar el tiempo de ejercicio
      e.target.reset();

      // Guardar datos en localStorage
      saveDataToLocalStorage();
    }
  };

  return (
    <div id='container-progress'>
      <div className="cabeza-progress">
        <div className="progress-header-progress">
            <h2>Progresos y Metas</h2>
            <p>Visualiza y gestiona tus progresos y metas en el gimnasio.</p>
        </div>
        <div className="progress-summary-progress">
            <div className="summary-card-progress">
                <h3>Metas Completadas</h3>
                <p id="metas-completadas-progress">{metasCompletadas}</p>
            </div>
            <div className="summary-card-progress">
                <h3>Calorías Quemadas</h3>
                <p id="calorias-quemadas-progress">{caloriasQuemadas}</p>
            </div>
            <div className="summary-card-progress">
                <h3>Tiempo de Ejercicio</h3>
                <p id="tiempo-ejercicio-progress">{Math.floor(tiempoEjercicio / 60)}h {tiempoEjercicio % 60}m</p>
            </div>
        </div>
      </div>
      <div className="progress-container-progress">
          <section className="progress-card-progress">
              <h3>Metas Alcanzadas</h3>
              <ul id="metas-alcanzadas-progress">
                {metasAlcanzadas.map((meta, index) => (
                  <li key={index}>{meta.goalName} : {meta.goalTarget}</li>
                ))}
              </ul>
          </section>
          <section className="progress-card-progress">
              <h3>Nuevas Metas</h3>
              <form id="new-goal-form-progress" onSubmit={handleAddGoal}>
                  <input 
                      type="text" 
                      id="goal-name" 
                      name="goal-name" 
                      placeholder="Nombre de la meta" 
                      required 
                  />
                  <input 
                      type="number" 
                      id="goal-target" 
                      name="goal-target" 
                      placeholder="Objetivo (e.g., 10 km, 5 kg)" 
                      required 
                  />
                  <button type="submit">Añadir Meta</button>
              </form>
              <ul id="nuevas-metas-progress">
                  {/* Las nuevas metas se renderizan aquí */}
              </ul>
          </section>
          <section className="progress-card-progress">
              <h3>Registro de Actividades</h3>
              <form id="activity-form-progress" onSubmit={handleAddActivity}>
                  <input 
                      type="text" 
                      id="activity-name" 
                      name="activity-name" 
                      placeholder="Nombre de la actividad" 
                      required 
                  />
                  <input 
                      type="number" 
                      id="activity-duration" 
                      name="activity-duration" 
                      placeholder="Duración (minutos)" 
                      required 
                  />
                  <input 
                      type="number" 
                      id="activity-calories" 
                      name="activity-calories" 
                      placeholder="Calorías quemadas" 
                      required 
                  />
                  <button type="submit">Registrar Actividad</button>
              </form>
              <ul id="registro-actividades-progress">
                {registroActividades.map((actividad, index) => (
                  <li key={index}>
                    {actividad.activityName} : {actividad.activityDuration} min - {actividad.activityCalories} Cal
                  </li>
                ))}
              </ul>
          </section>
      </div>
    </div>
  );
}

export default Progreso;
