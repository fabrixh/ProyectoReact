import React, { useState } from 'react';
import './App.css';
import { Container, Typography, Button, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function App() {
  // Estados
  const [data, setData] = useState([]); // Almacena los datos
  const [loading, setLoading] = useState(false); // Indica si está cargando
  const [error, setError] = useState(null); // Almacena errores, si ocurren

  // Función para obtener datos
  const fetchData = async () => {
    setLoading(true); // Muestra el spinner de carga
    setError(null); // Limpia errores anteriores
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data); // Guarda los datos en el estado
    } catch (err) {
      setError('Error al cargar los datos'); // Guarda el error
    } finally {
      setLoading(false); // Finaliza la carga
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

      {/* Indicador de carga */}
      {loading && <CircularProgress style={{ margin: '20px 0' }} />}

      {/* Muestra errores */}
      {error && <Typography color="error">{error}</Typography>}

      {/* Lista de datos */}
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={`ID: ${item.id}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
