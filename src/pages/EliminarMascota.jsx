import React, { useState } from 'react';
import axios from 'axios';

function EliminarMascota() {
  const [idMascota, setIdMascota] = useState('');

  const handleChange = (event) => {
    setIdMascota(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:4000/api/mascotas/eliminarMascota/${idMascota}`);
      console.log(response.data.mensaje);
      setIdMascota('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idMascota">ID de la Mascota a Eliminar:</label>
        <input type="text" id="idMascota" name="idMascota" value={idMascota} onChange={handleChange} />
        <button type="submit">Eliminar Mascota</button>
      </form>
    </div>
  )
}

export default EliminarMascota;


