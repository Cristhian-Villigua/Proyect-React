import React, { useState, useEffect } from 'react';
import '../../assets/css/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import formConfig from '../../assets/json/register.json';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    pass: '',
    confPass: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    email: '',
    pass: '',
    confPass: ''
  });
  const navigate = useNavigate();
  useEffect(() => {
    const savedData = localStorage.getItem('registeredUsers');
    if (savedData) {
      console.log('Usuarios registrados:', JSON.parse(savedData));
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
    if (formData.name.trim() === '') {
      newErrors.name = 'El nombre es obligatorio.';
      isValid = false;
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = 'El nombre no puede contener números.';
      isValid = false;
    } else {
      newErrors.name = '';
    }
    if (formData.lastname.trim() === '') {
      newErrors.lastname = 'El apellido es obligatorio.';
      isValid = false;
    } else if (!nameRegex.test(formData.lastname.trim())) {
      newErrors.lastname = 'El apellido no puede contener números.';
      isValid = false;
    } else {
      newErrors.lastname = '';
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (formData.email.trim() === '') {
      newErrors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'El correo electrónico no es válido.';
      isValid = false;
    } else {
      newErrors.email = '';
    }
    if (formData.pass.trim() === '') {
      newErrors.pass = 'La contraseña es obligatoria.';
      isValid = false;
    } else {
      newErrors.pass = '';
    }
    if (formData.confPass.trim() === '') {
      newErrors.confPass = 'Confirmar la contraseña es obligatorio.';
      isValid = false;
    } else if (formData.confPass.trim() !== formData.pass.trim()) {
      newErrors.confPass = 'Las contraseñas no coinciden.';
      isValid = false;
    } else {
      newErrors.confPass = '';
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Guardar datos en localStorage
      const newUser = {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        pass: formData.pass,
      };
      const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const issavedUsers = savedUsers.find(savedUsers => savedUsers.email === formData.email);
      if(issavedUsers){
        return alert('El usuario ya esta registrado');
      }
      savedUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(savedUsers));

      alert('Formulario enviado correctamente. Datos guardados localmente.');
      navigate('/Login');
    }
  };
  return (
    <div className='container-register'>
      <div className="box">
        <form className="form" id="register-form" onSubmit={handleSubmit}>
          <h2 className='title-register'>{formConfig.title}</h2>
          
           {/* Renderizar campos dinámicamente desde el JSON */}
          {formConfig.fields.map((field, index) => (
            <div className="inputbox" key={index}>
              <label className="form-label" htmlFor={field.model}>{field.label}</label>
              <input
                type={field.type || "text"}
                id={field.model}
                name={field.model}
                placeholder={field.placeholder}
                value={formData[field.model]}
                onChange={handleChange}
              />
              {errors[field.model] && <span className="error-message" style={{visibility: 'visible'}}>{errors[field.model]}</span>}
            </div>
          ))}

          {formConfig.buttons.map((button, index) => (
            <button key={index} className='boton-register' id={button.id} type={button.type}>
              {button.text}
            </button>
          ))}

          <div className="register">
            {formConfig.links.map((link, index) => (
              <p key={index}>
                {link.text} <Link to={link.href}>{link.linkText}</Link>
              </p>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;