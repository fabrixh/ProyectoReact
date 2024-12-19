import React, { useState } from 'react';
import './App.css';
import { Container, Typography, Button } from '@mui/material';
import Login from './login';
import DataComponent from './components/DataComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
      {/* Mostrar Login si no ha iniciado sesión */}
      {!isLoggedIn ? (
        <Login onLogin={setIsLoggedIn} />
      ) : (
        // Mostrar el resto de la aplicación si ya está logueado
        <div>
          <Typography variant="h4" gutterBottom>
            Bienvenido a la Página de Inicio
          </Typography>
          <Button variant="contained" color="primary">
            Cargar Datos
          </Button>
          {/* Componente para manejar y mostrar los datos */}
          <DataComponent />
        </div>
      )}
    </Container>
  );
}

export default App;
