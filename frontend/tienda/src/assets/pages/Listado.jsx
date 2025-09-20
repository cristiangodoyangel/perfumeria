import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Listado = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/productos/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.length ? (
        products.map((product) => (
          <div key={product.id} className="p-4 border">
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <span>{product.precio}</span>
          </div>
        ))
      ) : (
        <div>No hay productos disponibles.</div>
      )}
    </div>
  );
};

export default Listado;
