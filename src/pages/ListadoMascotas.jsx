import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListadoMascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    async function fetchMascotas() {
      const response = await axios.get('http://localhost:4000/api/mascotas/obtenerMascotas');
      setMascotas(response.data);
    }

    fetchMascotas();
  }, []);

  return (
    <div>
      <h1>Listado de Mascotas</h1>
      <ul>
        <li>Id --- Nombre ---- Duenio</li>
        {mascotas.map((mascotas) => (
          
          <li key={mascotas.idMascota}>
                  {mascotas.idMascota}
                  {" --- "}
                  {mascotas.nombre}
                  {" --- "}
                  {mascotas.persona.nombre}
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default ListadoMascotas;
