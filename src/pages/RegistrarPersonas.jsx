
import React, { useState } from 'react';
import axios from 'axios';

const RegistrarPersonas = () => {
  const [nombre, setNombre] = useState('');
  const [domicilio, setDomicilio] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDomicilioChange = (event) => {
    setDomicilio(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const persona = {
      nombre,
      domicilio,
    };

    try {
      const response = await axios.post('http://localhost:4000/api/personas', {
      "nombre" : nombre,
      "domicilio" : domicilio
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
        Domicilio:
        <input type="text" value={domicilio} onChange={handleDomicilioChange} />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
 
}

export default RegistrarPersonas;
