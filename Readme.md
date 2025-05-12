# Nombre Validator

## Descripción del Proyecto

Nombre Validator es una aplicación web full-stack que permite validar nombres de usuarios y generar saludos personalizados. La aplicación consta de un backend en Node.js con Express y un frontend en React.

### Características Principales

- ✅ Validación de nombres de usuarios
- 🖥️ Interfaz de usuario intuitiva
- 📋 Lista de usuarios predefinidos
- 🌐 Comunicación cliente-servidor mediante APIs REST

## Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

### Clonar el Repositorio

```bash
git clone https://github.com/OcampoEmiliano/react-native-tp2.git
cd react-native-tp2
```

### Configurar Backend

```bash
# Navegar al directorio backend
cd server

# Instalar dependencias
npm install

# Configurar package.json
# Agregar "type": "module" para soporte de módulos ES

# Iniciar el servidor
node server.js
```

### Configurar Frontend

```bash
# Navegar al directorio frontend
cd client

# Instalar dependencias
npm install

# Iniciar la aplicación React
npm run dev
```

## Endpoints de API

### Validación de Nombre

- **Endpoint:** `/validar-nombre/:nombre`
- **Método:** GET
- **Descripción:** Valida si el nombre está en la lista de usuarios permitidos
- **Respuesta exitosa:**
  ```json
  {
    "valido": true,
    "mensaje": "Nombre válido",
    "usuariosValidos": ["maxi", "tati", "mauri", ...]
  }
  ```

### Saludo Personalizado

- **Endpoint:** `/saludo/:nombre`
- **Método:** GET
- **Descripción:** Genera un saludo personalizado para un nombre válido
- **Respuesta exitosa:**
  ```json
  {
    "mensaje": "¡Hola, Maxi!"
  }
  ```

## Usuarios Válidos Predefinidos

- maxi
- tati
- mauri
- anto
- juan
- maria
- carlos
- laura

## Validaciones

- Solo se permiten nombres de la lista predefinida
- Validación de formato (solo letras)
- Validación insensible a mayúsculas/minúsculas

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- CORS

### Frontend
- React
- Tailwind CSS
- Fetch API para llamadas HTTP

## Enlace

Enlace del Proyecto: https://github.com/OcampoEmiliano/react-native-tp2.git