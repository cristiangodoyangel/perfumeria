import React, { useEffect, useState } from "react";
import axios from "axios";


const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/productos") // Asegúrate de que esta URL sea la correcta de tu API
      .then((response) => {
        setProductos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error al cargar los productos: {error.message}</div>;
  }

  return (
    <div>
      <h1>Listado de Productos</h1>
      <div className="productos-lista">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>{producto.descripcion}</p>
            <p>${producto.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;