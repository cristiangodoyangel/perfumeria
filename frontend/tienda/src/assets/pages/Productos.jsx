import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // Asegúrate de que esta importación sea correcta

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('http://localhost:8000/api/productos/');
        setProducts(response.data);  // Asignamos los productos recibidos a la variable 'products'
      } catch (error) {
        console.error('Error al obtener los productos:', error);  // Mostramos el error si ocurre
      } finally {
        setLoading(false);  // Cambiamos el estado de loading a 'false' cuando terminamos de cargar
      }
    };
    fetchProducts();  // Llamamos a la función para obtener los productos al cargar el componente
  }, []);  // El array vacío asegura que solo se ejecute una vez cuando el componente se monte

  if (loading) {
    return <div>Cargando productos...</div>;  // Muestra este mensaje mientras se cargan los productos
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-6">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />  // Usamos el componente ProductCard para mostrar cada producto
        ))
      ) : (
        <div>No hay productos disponibles.</div>  // Muestra este mensaje si no hay productos disponibles
      )}
    </div>
  );
}
