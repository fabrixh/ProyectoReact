import React from 'react';
import './App.css';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la Página de Inicio
      </Typography>
      <Button variant="contained" color="primary">
        Cargar Datos
      </Button>
    </Container>
  );
}

export default App;
