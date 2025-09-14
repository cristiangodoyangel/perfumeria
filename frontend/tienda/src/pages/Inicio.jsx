import React from "react";
import Categories from "../components/Categories";  // Importa desde components
import ProductCard from "../components/ProductCard";  // Importa desde components


const Inicio = () => {
  return (
    <div className="main-content">
      <h1 className="title">Nuevos productos cada semana</h1>
      <p className="description">
        Mantente al día con las últimas tendencias en bienestar íntimo y productos de calidad
      </p>

      {/* Categorías */}
      <section className="categories">
        <Categories />
      </section>

      {/* Productos */}
      <section className="products-section">
        <h2>Nuevos productos</h2>
        <div className="products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default Inicio;
