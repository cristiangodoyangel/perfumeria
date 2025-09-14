import React from 'react';
import './Header.css';  // Asegúrate de tener el archivo de estilos para el Header

const Header = () => {
  return (
    <>
      {/* Banner superior */}
      <div className="banner">
        <p>Envío gratis en compras sobre $30.000 | Retira en nuestra tienda sin costo</p>
      </div>

      {/* Cabecera */}
      <div className="header">
        <div className="logo">
          <h1>Life Sex Shop</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Busca productos, categorías..." />
          <button>🔍</button>
        </div>

        <div className="user-actions">
          <button>Mi Cuenta</button>
          <button>🛒 Carrito (0)</button>
        </div>
      </div>
    </>
  );
};

export default Header;
