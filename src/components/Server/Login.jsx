import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    pass: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    pass: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear the error when the user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', pass: '' };
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // Validate email
    if (formData.email.trim() === '') {
      newErrors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'El correo electrónico no es válido.';
      isValid = false;
    }
    // Validate password
    if (formData.pass.trim() === '') {
      newErrors.pass = 'La contraseña es obligatoria.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const user = users.find(u => u.email === formData.email);
      if (user && user.pass === formData.pass) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/Index');
      } else {
        setError('Correo electrónico o contraseña incorrectos');
      }
    }
  };

  return (
    <div id="container-login">
      <div className="box-login">
        <form className="form" id="login-form" onSubmit={handleSubmit}>
          <h2 className='title-login'>
            <img src={require('../../assets/img/register-img/icono.webp')} className="icono" alt='ULEAM' />
            Iniciar Sesión
          </h2>
          {error && <span className="error-message">{error}</span>}
          <div className="inputbox">
            <label className="form-label" htmlFor="email">Correo electrónico:</label>
            <input
              type="email" 
              name="email" 
              id="email" 
              autoFocus 
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message" style={{visibility: 'visible'}}>{errors.email}</span>}
          </div>
          <div className="inputbox">
            <label className="form-label" htmlFor="pass">Contraseña:</label>
            <input 
              type="password" 
              name="pass" 
              id="pass" 
              value={formData.pass}
              onChange={handleChange}
            />
            {errors.pass && <span className="error-message" style={{visibility: 'visible'}}>{errors.pass}</span>}
          </div>
          <div className="forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <label>
              <Link className="a">Olvidaste tu contraseña</Link>
            </label>
          </div>
          <button className='boton-login' type="submit">Login</button>
          <div className="register">
            <p>No tienes una cuenta? <Link to="/register">Registrate</Link></p>
          </div>
          <div className='volver'>
            <Link className="inicio" to="/">Volver al inicio</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;