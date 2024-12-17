import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // URL de ejemplo
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la Página de Inicio
      </Typography>
      <Button variant="contained" color="primary" onClick={fetchData}>
        Cargar Datos
      </Button>
    </Container>
  );
};

export default HomePage;
