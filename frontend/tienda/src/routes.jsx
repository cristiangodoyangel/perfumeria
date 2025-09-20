// src/routes.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./assets/pages/Inicio";
import Productos from "./assets/pages/Productos";  // This should be fine now
import Carrito from "./assets/pages/Carrito";
import Checkout from "./assets/pages/Checkout";
import Categorias from "./assets/pages/Categorias";
import Listado from "./assets/pages/Listado";

const Rutas = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/categoria/:categoriaNombre" element={<Categorias />} />
      <Route path="/Listado" element={<Listado />} />
    </Routes>
  </Router>
);

export default Rutas;
