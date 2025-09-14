import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './pages/inicio';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Checkout from './pages/Checkout';
import Categorias from './pages/Categorias';

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
