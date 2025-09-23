import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection";

const Inicio = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a la API cuando el componente se monta
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/productos/');
        if (response.ok) {
          const data = await response.json();
          console.log(data);  // Verifica la estructura de los productos
          setProducts(data); // Almacena los productos en el estado
        } else {
          console.error('Error al obtener productos:', response.status);
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []); // El array vacío [] significa que solo se ejecutará una vez cuando el componente se monte

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white shadow rounded-lg">
      <HeroSection />
      
      {/* Nuevos productos */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold text-center mb-6" style={{ color: '#f83258' }}>
          Nuevos productos
        </h2>
        
        {loading ? (
          <div className="text-center py-8" style={{ color: '#8c000f' }}>
            Cargando productos...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.slice(0, 8).map((product) => ( // Mostrar solo los primeros 8 productos
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-8" style={{ color: '#8c000f' }}>
                No hay productos disponibles.
              </div>
            )}
          </div>
        )}
        
        {/* Botón para ver todos los productos */}
        {products.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => window.location.href = '/productos'}
              className="px-6 py-3 rounded-lg font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#8c000f' }}
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </section>
      
      {/* Categorías */}
      <section className="py-8">
        <Categories />
      </section>
    </div>
  );
};

export default Inicio;