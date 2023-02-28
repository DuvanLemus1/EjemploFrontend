
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout.jsx';
import RegistrarPersonas from './pages/RegistrarPersonas.jsx';
import ListadoPersonas from './pages/ListadoPersonas.jsx';
import EliminarPersona from './pages/EliminarPersona.jsx';
import ActualizarPersona from './pages/ActualizarPersona.jsx';
import RegistrarMascotas from './pages/RegistrarMascota.jsx';
import ListadoMascotas from './pages/ListadoMascotas.jsx';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<RegistrarPersonas />}/>
          <Route path='/listadoPersonas' element={<ListadoPersonas />}/>
          <Route path='/eliminarPersona' element={<EliminarPersona/>}/>
          <Route path='/actualizarPersona' element={<ActualizarPersona/>}/>
          <Route path='/crearMascota' element={<RegistrarMascotas/>}/>
          <Route path='/listadoMascotas' element={<ListadoMascotas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
