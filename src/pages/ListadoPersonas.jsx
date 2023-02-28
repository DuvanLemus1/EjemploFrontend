import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListadoPersonas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    async function fetchPersonas() {
      const response = await axios.get('http://localhost:4000/api/personas/obtenerPersonas');
      setPersonas(response.data);
    }

    fetchPersonas();
  }, []);

  return (
    <div>
      <h1>Listado de Personas</h1>
      <ul>
        <li>Id --- Nombre ---- Domicilio</li>
        {personas.map((persona) => (
          
          <li key={persona.idPersona}>{persona.idPersona}{" --- "}{persona.nombre}{" --- "}{persona.domicilio}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoPersonas;
