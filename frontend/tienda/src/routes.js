import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './pages/inicio';  // Componente de la página principal
import Productos from './pages/Productos';  // Componente de productos
import Carrito from './pages/Carrito';  // Componente de carrito
import Checkout from './pages/Checkout';  // Componente de checkout
import Categorias from './pages/Categorias';  // Componente de categorías

const Rutas = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/categoria/:categoriaNombre" element={<Categorias />} />
    </Routes>
  </Router>
);

export default Rutas;
