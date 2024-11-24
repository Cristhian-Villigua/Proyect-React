import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/welcome.css';
const Welcome =() =>{
    return(
        <div className='conteiner-welcome'>
            <header id="header-bienvenido">
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
                <nav id="nav-bienvenido">
                <Link className="button-register" to="/Register"><b>Regístrate</b></Link>
                <Link className="button-login" to="/Login"><b>Inicia sesión</b></Link>
                </nav>
            </header>
            <div id="main-bienvenida">
                <div className="welcome-bienvenida">
                    <div className="text-binvenda">
                        <h2 className="HCJ-bienvenido">¡Bienvenido a nuestro Gym!</h2>
                        <p className="p-bievenida">
                            En este sitio web, podrás descubrir todo lo que nuestro gimnasio tiene para ofrecerte. <br/>
                            <br/>
                            Nuestro sistema está diseñado para proporcionarte una experiencia de entrenamiento interactiva y efectiva,
                            ayudándote a desarrollar las habilidades necesarias para alcanzar tus objetivos de fitness y bienestar. <br/>
                            <br/>
                            Comienza tu viaje hoy y descubre todo lo que puedes lograr con nuestras herramientas y recursos de
                            entrenamiento. <br/>
                            <br/>
                            Regístrate para empezar o inicia sesión si ya tienes una cuenta.
                        </p> <br />
                        <div className="btn-bienvenida">
                            <Link className="button-register" to="/register"><b>Regístrate</b></Link>
                            <Link className="button-login" to="/login"><b>Inicia sesión</b></Link>
                        </div>
                    </div>
                    <div className="image-bienvenida">
                            <img src={require('../../assets/img/welcome-img/main.png')} alt="Imagen de aprendizaje" />
                    </div>
                </div>
                <div className="complemento-welcome">
                    <p className="text-welcome">
                        Preparate para una de las mejores experiencia, practicando activiades que mejores <br />
                        el bienestar de tu salud mental y fisica. Ademas con distintas combinaciones que <br /> lo 
                        puedes encontrar en un solo lugar.
                    </p>
                </div>
                <h3 className="titulo-1-welcome">Contamos con:</h3>
                <div className="principal-welcome">
                    <div className="cards-container-welcome">
                        <div className="card-welcome">
                            <img src={require('../../assets/img/welcome-img/gym.png')} alt="Máquinas" />
                            <div className="complement-welcome">
                                <h3 className='title-welcome'>Máquinas Modernas</h3>
                                <p className='tex-welcome'>Contamos con las ultimas máquinas del mercado</p>
                            </div>
                        </div>
                        <div className="card-welcome">
                            <img src={require('../../assets/img/welcome-img/Imaga2.png')} alt="Crossfit" />
                            <div className="complement-welcome">
                                <h3 className='title-welcome'>Crossfit</h3>
                                <p className='tex-welcome'>Contamos con áreas para fines de crossfit</p>
                            </div>
                        </div>
                        <div className="card-welcome">
                            <img src={require('../../assets/img/welcome-img/Image1.png')} alt="Áreas" />
                            <div className="complement-welcome">
                                <h3 className='title-welcome'>Áreas de pesas</h3>
                                <p className='tex-welcome'>Contamos con distintas áreas para levantammiento de pesas</p>    
                            </div>
                        </div>
                        <div className="card-welcome">
                            <img src={require('../../assets/img/welcome-img/Image7.png')} alt="Otras" />
                            <div className="complement-welcome">
                                <h3 className='title-welcome'>Otras áreas</h3>
                                <p className='tex-welcome'>Tanto para hombres y mujeres</p>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secundary-welcome">
                    <div className="media-welcome">
                        <div className="img-welcome">
                            <div className="img1-welcome">
                                <img src={require('../../assets/img/welcome-img/Image3.png')} alt="Yoga" />
                            </div>
                            <div className="img2-welcome">
                                <img src={require('../../assets/img/welcome-img/Image5.png')} alt="masajes" />
                            </div>
                            <div className="img3-welcome">
                                <img src={require('../../assets/img/welcome-img/Image7.png')} alt="Otras" />
                            </div>
                        </div>
                        <div className="parrafo-welcome">
                            <p className="texto-1-welcome">Inspirado en lo mejor <br />
                                de lo mejor</p>
                        </div>
                    </div>
                </div>
                <h3 className="titulo-1-welcome">Area de relajación:</h3>
                <div className="tercer-welcome">
                    <div className="cards-container2-welcome">
                        <div className="card2-welcome">
                            <img src={require('../../assets/img/welcome-img/Image5.png')} alt="masajes" />
                            <div className="complement2-welcome">
                                <h3 className='title-welcome'>Sala de masajes</h3>
                                <p className='tex-welcome'>Área de masajes</p>
                            </div>
                        </div>
                        <div className="card2-welcome">
                            <img src={require('../../assets/img/welcome-img/Image4.png')} alt="Saunas" />
                            <div className="complement2-welcome">
                                <h3 className='title-welcome'>Saunas</h3>
                                <p className='tex-welcome'>Áreas de saunas</p>
                            </div>
                        </div>
                        <div className="card2-welcome">
                            <img src={require('../../assets/img/welcome-img/Image3.png')} alt="Yoga" />
                            <div className="complement2-welcome">
                                <h3 className='title-welcome'>Yoga</h3>
                                <p className='tex-welcome'>Área de yoga</p>    
                            </div>
                        </div>
                        <div className="card2-welcome">
                            <img src={require('../../assets/img/welcome-img/Image6.png')} alt="Otras" />
                            <div className="complement2-welcome">
                                <h3 className='title-welcome'>Otras áreas</h3>
                                <p className='tex-welcome'>Otras áreas</p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer-bienvenida">
                <nav className="footer-nav">
                    <Link>Términos y Condiciones</Link>
                    <Link>Política de Privacidad</Link>
                </nav>
                <div className="contacto-bienvenida">
                    <p className="p-bienvenida">Gimnasio Universitario</p>
                    <p className="p-bienvenida">Dirección: Calle 12, Vía San Mateo</p>
                    <p className="p-bienvenida">Teléfono: 444-6957</p>
                    <p className="p-bienvenida">Email: gimnasio@hotmail.com</p>
                </div>
            </footer>
        </div>
    );
}

export default Welcome
