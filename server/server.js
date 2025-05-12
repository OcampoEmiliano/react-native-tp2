import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

// Lista de usuarios válidos
const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto', 'juan', 'maria', 'carlos', 'laura'];

// Función para validar nombre
function validarNombre(nombre) {
  // Convertir a minúsculas para comparación insensible a mayúsculas
  const nombreNormalizado = nombre.trim().toLowerCase();
  
  // Validaciones:
  // 1. Debe estar en la lista de usuarios válidos
  // 2. No debe estar vacío
  // 3. Debe contener solo letras
  if (!nombreNormalizado) return false;
  
  // Verificar si está en la lista de usuarios válidos
  const esUsuarioValido = usuariosValidos.includes(nombreNormalizado);
  
  // Verificar formato del nombre (solo letras)
  const regex = /^[a-zá-ú]+$/;
  const formatoValido = regex.test(nombreNormalizado);
  
  return esUsuarioValido && formatoValido;
}

// API 1: Ruta de saludo
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({ mensaje: `¡Hola, ${nombre}!` });
});

// API 2: Ruta de validación de nombre
app.get('/validar-nombre/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  
  // Validar el nombre
  const esValido = validarNombre(nombre);
  
  res.json({ 
    valido: esValido,
    mensaje: esValido 
      ? 'Nombre válido' 
      : 'El nombre no es válido. Debe ser uno de los usuarios registrados.',
    usuariosValidos: usuariosValidos
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});