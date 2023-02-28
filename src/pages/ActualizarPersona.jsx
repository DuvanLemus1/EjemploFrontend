import React, { useState } from 'react';
import axios from 'axios';

const ActualizarPersona = () => {
  const [idPersona, setIdPersona] = useState('');
  const [nombre, setNombre] = useState('');
  const [domicilio, setDomicilio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4000/api/personas/actualizarPersona/${idPersona}`, {
        "nombre":nombre,
        "domicilio":domicilio
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Actualizar Persona</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idPersona">ID Persona:</label>
          <input type="text" id="idPersona" value={idPersona} onChange={(e) => setIdPersona(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="domicilio">Domicilio:</label>
          <input type="text" id="domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} required />
        </div>
        <button type="submit">Actualizar Persona</button>
      </form>
    </div>
  );
};

export default ActualizarPersona;
