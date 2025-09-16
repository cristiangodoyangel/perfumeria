import React from "react";
import Categories from "../components/Categories";  // Importa desde components

import { ProductCard } from "../components/ProductCard";  // Productos
import { HeroSection } from "../components/HeroSection";


const Inicio = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white shadow rounded-lg">
          <HeroSection />
          {/* Nuevos productos */}
          <section className="py-8">
              <h2 className="text-2xl font-semibold text-center text-pink-500 mb-6">Nuevos productos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
              </div>
          </section>
          {/* Categorías */}
          <section className="py-5">
              <Categories />
          </section>

          {/* Productos */}

      </div>
  );
};

export default Inicio;
