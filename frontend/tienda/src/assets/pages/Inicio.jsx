import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api"; // Asegúrate de que la ruta al archivo 'api.js' sea correcta
import { HeroSection } from "../components/HeroSection";

const Inicio = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada a la API cuando el componente se monta
    const getProducts = async () => {
      const data = await fetchProducts();  // Realiza la llamada a la API
      console.log(data);  // Verifica la estructura de los productos
      setProducts(data); // Almacena los productos en el estado
    };
    getProducts();
  }, []); // El array vacío [] significa que solo se ejecutará una vez cuando el componente se monte

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white shadow rounded-lg">
      <HeroSection />
      {/* Nuevos productos */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-6">Nuevos productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} /> // key=product.id para evitar el warning
            ))
          ) : (
            <div>Cargando productos...</div>  // Mensaje mientras los productos se cargan
          )}
        </div>
      </section>
      {/* Categorías */}
      <section className="py-5">
        <Categories />
      </section>
    </div>
  );
};

export default Inicio;
