import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./assets/pages/Inicio";
import Productos from "./assets/pages/Productos";
import Carrito from "./assets/pages/Carrito";
import Checkout from "./assets/pages/Checkout";
import Categorias from "./assets/pages/Categorias";


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