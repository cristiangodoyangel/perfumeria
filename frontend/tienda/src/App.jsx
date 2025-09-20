import React from "react";
import Rutas from "./routes";  // Asegúrate de que tu archivo routes esté correctamente configurado

import './index.css'; // Asegúrate de que Tailwind CSS esté importado
import './App.css'; // Importa tus estilos personalizados si los tienes
import { Header } from "./assets/components/Header";
import { Footer } from "./assets/components/Footer"; 
 // Asegúrate de que la ruta sea correcta



const App = () => {
  return (
    <div className="App">
      <Header />  {/* Aquí importamos y usamos el Header */}
      <Rutas />
      <Footer />
    </div>
  );
}

export default App;