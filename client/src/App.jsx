import React, { useState } from 'react';

export default function NameValidator() {
  // Estado para manejar el nombre ingresado
  const [nombre, setNombre] = useState('');
  
  // Estado para manejar mensajes de validación y saludo
  const [mensajeValidacion, setMensajeValidacion] = useState('');
  const [saludo, setSaludo] = useState('');
  const [usuariosValidos, setUsuariosValidos] = useState([]);
  
  // Manejar cambios en el input
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    // Limpiar mensajes anteriores
    setMensajeValidacion('');
    setSaludo('');
  };
  
  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Primero validar el nombre
      const validacionResponse = await fetch(`http://localhost:3000/validar-nombre/${nombre}`);
      const validacionData = await validacionResponse.json();
      
      // Establecer mensaje de validación
      setMensajeValidacion(validacionData.mensaje);
      
      // Guardar lista de usuarios válidos
      setUsuariosValidos(validacionData.usuariosValidos || []);
      
      // Si el nombre es válido, obtener el saludo
      if (validacionData.valido) {
        const saludoResponse = await fetch(`http://localhost:3000/saludo/${nombre}`);
        const saludoData = await saludoResponse.json();
        
        setSaludo(saludoData.mensaje);
      } else {
        // Limpiar saludo si el nombre no es válido
        setSaludo('');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensajeValidacion('Error al conectar con el servidor');
    }
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Validador de Nombre</h1>
      
      <div className="space-y-4">
        <input 
          type="text" 
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Ingrese su nombre"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button 
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Validar y Saludar
        </button>
      </div>
      
      {/* Mostrar mensajes de validación */}
      {mensajeValidacion && (
        <div className={`mt-4 p-3 rounded ${
          mensajeValidacion.includes('válido') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {mensajeValidacion}
        </div>
      )}
      
      {/* Mostrar saludo */}
      {saludo && (
        <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded">
          {saludo}
        </div>
      )}
    </div>
  );
}