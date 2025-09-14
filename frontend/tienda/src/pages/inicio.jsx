import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inicio = () => {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/productos/');
        setProductos(response.data); // Establecer productos en el estado
      } catch (err) {
        setError('Error al cargar los productos');
      } finally {
        setLoading(false); // Terminar la carga
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Productos Destacados</h1>
      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id} className="product-card">
            <img src={producto.image_url} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
