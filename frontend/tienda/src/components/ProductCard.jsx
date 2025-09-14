import React from "react";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="img/producto.jpg" alt="Producto" />
      <h3>Producto A</h3>
      <p>Descripción del Producto A</p>
      <p>$15.990</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
