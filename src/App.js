import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" className="title" gutterBottom>
        Bienvenido a la Página de Inicio
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchData}
        disabled={loading}
        className="button"
      >
        {loading ? 'Cargando...' : 'Cargar Datos'}
      </Button>
      {loading && <CircularProgress />}
      <List className="list">
        {data.map(user => (
          <ListItem key={user.id} className="list-item">
            <ListItemText
              primary={user.name}
              secondary={`${user.email} - ${user.address.city}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
