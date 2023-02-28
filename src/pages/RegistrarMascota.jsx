
import React, { useState } from 'react';
import axios from 'axios';

const RegistrarMascotas = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [idPersona, setIdPersona] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };

  const handleIdPersonaChange = (event) => {
    setIdPersona(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const mascotas = {
      nombre,
      edad,
      idPersona
    };
    
    try {
      const response = await axios.post('http://localhost:4000/api/mascotas/crearMascota', {
      "nombre" : nombre,
      "edad" : edad,
      "idPersona":idPersona
       });
      console.log(response.data);
      // Aquí podrías hacer algo con la respuesta, por ejemplo, mostrar un mensaje de éxito.
    } catch (error) {
      console.error(error);
      // Aquí podrías hacer algo con el error, por ejemplo, mostrar un mensaje de error.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Edad en anios:
        <input type="text" value={edad} onChange={handleEdadChange} />
      </label>
      <label>
        idDuenio:
        <input type="text" value={idPersona} onChange={handleIdPersonaChange} />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
 
}

export default RegistrarMascotas;
