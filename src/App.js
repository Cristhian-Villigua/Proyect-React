import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/Server/PrivateRoute.jsx';
import Welcome from './components/Users/Welcome.jsx';
import Register from './components/Server/Register.jsx';
import Login from './components/Server/Login.jsx';
import NarBar from './components/template/NarBar.jsx';
import Footer from './components/template/Footer.jsx'; 
import Index from './components/Users/Index.jsx';
import Membresia from './components/Users/Membresia.jsx';
import Clases from './components/Users/Clases.jsx';
import Progreso from './components/Users/Progreso.jsx';
import Pagos from './components/Users/Pagos.jsx';
import CalendarPage from './components/Users/Calendario.jsx';
import Mantenimiento from './components/Users/Mantenimento.jsx';
import Perfil from './components/Users/Perfil.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Index' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><Index /><Footer /></>} />}/>
          <Route path='/Membresia' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><Membresia /><Footer /></>} />}/>
          <Route path='/Clases' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><Clases /><Footer /></>} />}  />
          <Route path='/Progreso' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><Progreso /><Footer /></>} />} />
          <Route path='/Pagos' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><Pagos /><Footer /></>} />} />
          <Route path='/Calendario' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><CalendarPage /><Footer /></>} />} />
          <Route path='/Mantenimiento' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><Mantenimiento /><Footer /></>} />} />
          <Route path='/Perfil' element={<PrivateRoute requiresAuth={true} element={<><NarBar /><Perfil /><Footer /></>} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
