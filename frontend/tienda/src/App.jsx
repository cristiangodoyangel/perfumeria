import React from "react";
import Header from './components/Header';  // Asegúrate de que la ruta sea correcta
import Rutas from "./routes";  // Asegúrate de que tu archivo routes esté correctamente configurado


const App = () => {
  return (
    <div className="App">
      <Header />  {/* Aquí importamos y usamos el Header */}
      <Rutas />
    </div>
  );
}

export default App;
