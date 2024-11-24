import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/narbar.css';

function NarBar() {
  const [clicked, setClicked] = useState(false);
  const [userData, setUserData] = useState(null);  
  const navigate = useNavigate();  

  const handleButtonClick = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);  
      setUserData({ name: user.name, lastname: user.lastname, email: user.email });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div id="container-narbar">
      <header>
        <div className="logo">
          <img src={require('../../assets/img/cabecera-img/logo.webp')} alt="Logo" />
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" rel="noopener">
            <img src={require('../../assets/img/cabecera-img/facebook.png')} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" rel="noopener">
            <img src={require('../../assets/img/cabecera-img/instagran.png')} alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" rel="noopener">
            <img src={require('../../assets/img/cabecera-img/x.png')} alt="Twitter" />
          </a>
        </div>
        <nav id="menuprincipal">
          <div>
            <Link to="/Index"><b>Inicio</b></Link>
            <Link to="/Clases"><b>Clases</b></Link>
            <Link to="/Membresia"><b>Membresía</b></Link>
            <Link to="/Progreso"><b>Progreso</b></Link>
          </div>
          <div className="sidebar-icon" onClick={handleButtonClick}><b>☰</b></div>
        </nav>
      </header>
      <div id="sidebar" className={`sidebar ${clicked ? 'active' : ''}`}>
        <div className="close-btn" onClick={handleButtonClick}>×</div>
        {userData ? (
          <div className="user-info">
            <p>{userData.name} {userData.lastname}</p>
            <p>{userData.email}</p>
          </div>
        ) : (
          <div className="user-info">
            <p>Invitado</p>
          </div>
        )}
        <hr />
        <Link to="/Perfil">Perfil</Link>
        <hr />
        <Link to="/" onClick={handleLogout}>Log Out</Link>
      </div>
    </div>
  );
}

export default NarBar;
