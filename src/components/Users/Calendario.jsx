    import React, { useState, useEffect, useCallback } from 'react';
    import '../../assets/css/calendario.css';

    const CalendarPage = () => {
    const [setUser] = useState({ name: '', email: '' });
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState('');
    const [eventDatetime, setEventDatetime] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [calendarDays, setCalendarDays] = useState([]);

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const loadUser = useCallback(() => {
        const loggedInUserEmail = localStorage.getItem('currentUser');
        if (loggedInUserEmail) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === loggedInUserEmail);
        if (user) {
            setUser({ name: `${user.name} ${user.surname}`, email: user.email });
        }
        }
    },[setUser]);
    const getEvents = () => {
        return JSON.parse(localStorage.getItem('events')) || [];
      };
      
      const getEventsForDate = useCallback((date) => {
        const events = getEvents();
        return events.filter(event => {
          const eventDate = new Date(event.datetime);
          return eventDate.getDate() === date.getDate() &&
                 eventDate.getMonth() === date.getMonth() &&
                 eventDate.getFullYear() === date.getFullYear();
        });
      }, []);
      
      const updateCalendar = useCallback(() => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const days = Array(firstDay).fill({ date: '', events: [] });
        for (let day = 1; day <= daysInMonth; day++) {
          const date = new Date(currentYear, currentMonth, day);
          days.push({ date: day, events: getEventsForDate(date) });
        }
        setCalendarDays(days);
      }, [currentMonth, currentYear, getEventsForDate]);
      
    useEffect(() => {
        loadUser();
        updateCalendar();
    }, [currentMonth, currentYear, loadUser, updateCalendar]); 
    const prevMonth = () => {
        if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
        } else {
        setCurrentMonth(currentMonth - 1);
        }
    };
    const nextMonth = () => {
        if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
        } else {
        setCurrentMonth(currentMonth + 1);
        }
    };
    const addEvent = (e) => {
        e.preventDefault();
        const newEvent = {
        id: Date.now(),
        name: eventName,
        datetime: eventDatetime,
        description: eventDescription,
        };
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        resetEventForm();
        updateCalendar();
    };
    const deleteEvent = (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId);
        setEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        updateCalendar();
    };
    const resetEventForm = () => {
        setEventName('');
        setEventDatetime('');
        setEventDescription('');
    };
    const selectDay = (date) => {
        const selectedDate = new Date(currentYear, currentMonth, date);
        setEvents(getEventsForDate(selectedDate));
    };
    const currentMonthYear = `${monthNames[currentMonth]} ${currentYear}`;
    return (
        <div id="main-calendario">
        <div className="calendar-header-calendario">
            <h2 className='title-calendar'>Calendario Personal</h2>
            <p>Aquí puedes agregar y eliminar elementos según tu preferencia.</p>
        </div>
        <div className="calendar-container-calendario">
            <div className="calendar-controls-calendario">
            <button onClick={prevMonth}>Anterior</button>
            <span id="current-month-year">{currentMonthYear}</span>
            <button onClick={nextMonth}>Siguiente</button>
            </div>
            <div className="calendar-calendario">
            {calendarDays.map((day, index) => (
                <div className="calendar-day" key={index} onClick={() => selectDay(day.date)}>
                <span>{day.date}</span>
                {day.events.length > 0 && (
                    <ul>
                    {day.events.map(event => (
                        <li key={event.id}>{event.name}</li>
                    ))}
                    </ul>
                )}
                </div>
            ))}
            </div>
        </div>
        <div className="event-details-calendario">
            <h3>Detalles del Evento</h3>
            <form onSubmit={addEvent} id="event-form">
            <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Nombre del evento"
                required
            />
            <input
                type="datetime-local"
                value={eventDatetime}
                onChange={(e) => setEventDatetime(e.target.value)}
                required
            />
            <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Descripción del evento"
                required
            ></textarea>
            <button type="submit">Añadir Evento</button>
            </form>
            <ul id="event-list">
            {events.map(event => (
                <li key={event.id}>
                <p><strong>{event.name}</strong></p>
                <p>{event.datetime}</p>
                <p>{event.description}</p>
                <button className="cancelar-cale" onClick={() => deleteEvent(event.id)}>Eliminar</button>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    };

    export default CalendarPage;
