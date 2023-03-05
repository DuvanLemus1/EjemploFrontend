import React, { useState } from 'react';
import axios from 'axios';

const ActualizarMascota = () => {
  const [idMascota, setIdMascota] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4000/api/mascotas/actualizarMascota/${idMascota}`, {
        "nombre":nombre,
        "edad":edad
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Actualizar Mascota</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idMascota">ID Mascota:</label>
          <input type="text" id="idMascota" value={idMascota} onChange={(e) => setIdMascota(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input type="text" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} required />
        </div>
        <button type="submit">Actualizar Mascota</button>
      </form>
    </div>
  );
};

export default ActualizarMascota;