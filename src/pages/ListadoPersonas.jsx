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
    <>
      <div>
        <h2>Actualizar Persona</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 grid grid-cols-2 space-y-3">
          <div>
            <label htmlFor="idPersona">ID Persona:</label>
            <input type="text" id="idPersona" value={idPersona} onChange={(e) => setIdPersona(e.target.value)} required className="bg-slate-400 rounded-lg shadow-md p-0.5" />
          </div>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required  className="bg-slate-400 rounded-lg shadow-md p-0.5"/>
          </div>
          <div>
            <label htmlFor="domicilio">Domicilio:</label>
            <input type="text" id="domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} required className="bg-slate-400 rounded-lg shadow-md p-0.5"/>
          </div>
          <button type="submit" className="bg-black text-white rounded-lg px-4 py-2">Actualizar Persona</button>
        </form>
      </div>
      <br></br>
      <div>
        <h1>Listado de Personas</h1>
          <ul className="mt-4 divide-y divide-gray-400">
            <li className="flex font-bold">
              <span className="w-1/3 px-2">ID</span>
              <span className="w-1/3">Nombre</span>
              <span className="w-1/3 px-2">Domicilio</span>
            </li>
            {personas.map((persona) => (
              <li key={persona.idPersona} className="flex py-2">
                <span className="w-1/3 px-2">{persona.idPersona}</span>
                <span className="w-1/3">{persona.nombre}</span>
                <span className="w-1/3 px-2">{persona.domicilio}</span>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default ListadoPersonas;
