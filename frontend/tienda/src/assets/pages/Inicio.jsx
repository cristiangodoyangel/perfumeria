import React from "react";
import Categories from "../components/Categories";  // Importa desde components

import { ProductCard } from "../components/ProductCard";  // Productos


const Inicio = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white shadow rounded-lg">
          {/* Texto de prueba */}
          <h1 className="text-4xl font-bold text-center text-pink-500 py-8">
              ¡Bienvenido a nuestra tienda!
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
              Estamos felices de tenerte aquí. Explora nuestros productos y encuentra lo que necesitas.
          </p>
          <section className="py-8">
              <h2 className="text-2xl font-semibold text-center text-pink-500 mb-6">Nuevos productos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
              </div>
          </section>
          {/* Categorías */}
          <section className="py-8">
              <Categories />
          </section>

          {/* Productos */}

      </div>
  );
};

export default Inicio;
