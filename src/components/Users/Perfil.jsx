import React, { useState, useEffect } from 'react';
import '../../assets/css/perfil.css';

const Perfil = () => {
  const [activeSection, setActiveSection] = useState('info-section');
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    pass: '',
    phone: '',
    address: ''
  });

  const [profileImage, setProfileImage] = useState('');
  const [updatedProfileImage, setUpdatedProfileImage] = useState('');
  const changeProfileImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUpdatedProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  const validateForm = (formId) => {
    const form = document.getElementById(formId);
    let isValid = true;

    form.querySelectorAll('input').forEach((input) => {
      const errorElement = input.nextElementSibling;
      if (input.value.trim() === '') {
        errorElement.textContent = 'Este campo es obligatorio.';
        errorElement.style.display = 'block';
        isValid = false;
      } else {
        errorElement.style.display = 'none';
      }
    });
    return isValid;
  };
  const handleFormSubmit = (event, formId) => {
    event.preventDefault();
    if (validateForm(formId)) {
      const updatedUser = { ...updatedUserData, profileImage: updatedProfileImage };
      
      const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      const index = savedUsers.findIndex(user => user.email === currentUser.email); 
      if (index !== -1) {
        savedUsers[index] = updatedUser;
        localStorage.setItem('registeredUsers', JSON.stringify(savedUsers));
        localStorage.setItem('currentUser', JSON.stringify(updatedUser)); 
        alert('Cambios guardados');
      }
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUpdatedUserData({
        name: currentUser.name,
        lastname: currentUser.lastname,
        email: currentUser.email,
        pass: currentUser.pass,
        phone: currentUser.phone || '',
        address: currentUser.address || ''
      });
      setProfileImage(currentUser.profileImage || '');
      setUpdatedProfileImage(currentUser.profileImage || '');
    } else {
      window.location.href = '/login';
    }
  }, []);

  const handleInputChange = (field, value) => {
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  return (
    <div className="container-perfil">
      <div className='main-perfil'>
        <div className="content-perfil">
          <div className="left-side-perfil">
            <aside className="sidebar1">
              <div className="profile-pic-perfil">
                <img src={updatedProfileImage || profileImage || 'default-profile-image.jpg'} alt="Foto de perfil" id="profileImage" />
                <button className='button-perfil' onClick={() => document.getElementById('profileImageInput').click()}>Agregar Foto</button>
                <input 
                  type="file" 
                  id="profileImageInput" 
                  style={{ display: 'none' }}
                  onChange={changeProfileImage} 
                />
              </div>
              <ul className="menu-perfil">
                <li onClick={() => showSection('info-section')}>Información Personal</li>
                <li onClick={() => showSection('phone-section')}>Teléfono</li>
                <li onClick={() => showSection('address-section')}>Dirección</li>
              </ul>
            </aside>
          </div>
          <div className="right-side-perfil">
            <section className="content-perfil">
              <div 
                id="info-section" 
                className="section-perfil" 
                style={{ display: activeSection === 'info-section' ? 'block' : 'none' }}
              >
                <h2>Información Personal</h2>
                <form id="profile-form" onSubmit={(e) => handleFormSubmit(e, 'profile-form')}>
                  <div className="form-group">
                    <label className='label-perfil' htmlFor="nombre">Nombre:</label>
                    <input className='input-login'
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      placeholder="Nombre" 
                      value={updatedUserData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    <span className="error-message"></span>
                  </div>
                  <div className="form-group">
                    <label className='label-perfil' htmlFor="apellido">Apellido:</label>
                    <input className='input-login'
                      type="text" 
                      id="apellido" 
                      name="apellido" 
                      placeholder="Apellido" 
                      value={updatedUserData.lastname}
                      onChange={(e) => handleInputChange('lastname', e.target.value)}
                    />
                    <span className="error-message"></span>
                  </div>
                  <button className='button-perfil' type="submit">Guardar Cambios</button>
                </form>
              </div>

              <div 
                id="phone-section" 
                className="section-perfil" 
                style={{ display: activeSection === 'phone-section' ? 'block' : 'none' }}
              >
                <h2>Teléfono</h2>
                <form id="phone-form" onSubmit={(e) => handleFormSubmit(e, 'phone-form')}>
                  <div className="form-group">
                    <label className='label-perfil' htmlFor="telefono">Teléfono:</label>
                    <input className='input-login'
                      type="tel" 
                      id="telefono" 
                      name="telefono" 
                      placeholder="Teléfono" 
                      value={updatedUserData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                    <span className="error-message"></span>
                  </div>
                  <button className='button-perfil' type="submit">Guardar Cambios</button>
                </form>
              </div>

              <div 
                id="address-section" 
                className="section-perfil" 
                style={{ display: activeSection === 'address-section' ? 'block' : 'none' }}
              >
                <h2>Dirección</h2>
                <form id="address-form" onSubmit={(e) => handleFormSubmit(e, 'address-form')}>
                  <div className="form-group">
                    <label className='label-perfil' htmlFor="direccion">Dirección:</label>
                    <input className='input-login'
                      type="text" 
                      id="direccion" 
                      name="direccion" 
                      placeholder="Dirección" 
                      value={updatedUserData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                    <span className="error-message"></span>
                  </div>
                  <button className='button-perfil' type="submit">Guardar Cambios</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
