import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Cambiamos ReactDOM.render por createRoot

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
