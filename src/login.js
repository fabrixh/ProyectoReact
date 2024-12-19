import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const validUsername = 'usuario_prueba';
    const validPassword = '123456';

    if (username === validUsername && password === validPassword) {
      onLogin(true); // Cambia el estado al iniciar sesión
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={5} textAlign="center">
        <Typography variant="h5">Iniciar Sesión</Typography>
      </Box>
      <Box mt={3}>
        <TextField
          label="Usuario"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Ingresar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
