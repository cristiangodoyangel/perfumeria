import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Estilos globales
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Renderiza el componente principal */}
  </StrictMode>
);
