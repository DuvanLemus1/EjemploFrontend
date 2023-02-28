import React, { useState } from 'react';
import axios from 'axios';

function EliminarPersona() {
  const [idPersona, setIdPersona] = useState('');

  const handleChange = (event) => {
    setIdPersona(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:4000/api/personas/eliminarPersona/${idPersona}`);
      console.log(response.data.mensaje);
      setIdPersona('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idPersona">ID de la Persona a Eliminar:</label>
        <input type="text" id="idPersona" name="idPersona" value={idPersona} onChange={handleChange} />
        <button type="submit">Eliminar Persona</button>
      </form>
    </div>
  )
}

export default EliminarPersona;


