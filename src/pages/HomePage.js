import React, { useState } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(false); // Estado para indicar si está cargando

  const fetchData = async () => {
    setLoading(true); // Mostrar indicador de carga
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Ejemplo: API de posts
      setData(response.data); // Guardar los datos en el estado
    } catch (error) {
      console.error('Error al cargar los datos', error);
    } finally {
      setLoading(false); // Ocultar indicador de carga
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la Página de Inicio
      </Typography>
      <Button variant="contained" color="primary" onClick={fetchData} disabled={loading}>
        {loading ? 'Cargando...' : 'Cargar Datos'}
      </Button>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={`ID: ${item.id}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default HomePage;
