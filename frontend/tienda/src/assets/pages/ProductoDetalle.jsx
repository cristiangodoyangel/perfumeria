import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Heart, ShoppingCart, ArrowLeft, Star } from 'lucide-react';

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/productos/${id}/`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error('Error al obtener producto:', response.status);
          navigate('/productos'); // Redirigir si no se encuentra el producto
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        navigate('/productos');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, navigate]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    console.log('Agregar al carrito:', { productId: product.id, quantity });
    // Aquí implementarías la lógica del carrito
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    // Aquí implementarías la lógica de lista de deseos
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" style={{ color: '#8c000f' }}>
          <div className="text-lg">Cargando producto...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" style={{ color: '#8c000f' }}>
          <div className="text-lg">Producto no encontrado</div>
          <Button 
            onClick={() => navigate('/productos')}
            className="mt-4"
            style={{ backgroundColor: '#8c000f', color: '#fff' }}
          >
            Volver a productos
          </Button>
        </div>
      </div>
    );
  }

  const hasStock = product.stock && product.stock > 0;
  const isActive = product.activo !== false;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Botón de volver */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2"
          style={{ color: '#8c000f' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
          {/* Imagen del producto */}
          <div className="relative">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="w-full h-96 object-cover rounded-lg"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMzAwQzI1NS4yMjggMzAwIDMwMCAyNTUuMjI4IDMwMCAyMDBDMzAwIDE0NC43NzIgMjU1LjIyOCAxMDAgMjAwIDEwMEMxNDQuNzcyIDEwMCAxMDAgMTQ0Ljc3MiAxMDAgMjAwQzEwMCAyNTUuMjI4IDE0NC43NzIgMzAwIDIwMCAzMDBaIiBmaWxsPSIjZTFlNWU5Ii8+Cjwvc3ZnPgo=';
              }}
            />
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide mb-2" style={{ color: '#f83258' }}>
                {product.categoria}
              </p>
              <h1 className="text-3xl font-bold mb-4" style={{ color: '#8c000f' }}>
                {product.nombre}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      style={{
                        fill: i < Math.floor(product.rating || 0) ? '#f83258' : 'none',
                        color: i < Math.floor(product.rating || 0) ? '#f83258' : '#ccc',
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm" style={{ color: '#8c000f' }}>
                  {product.rating || 0} ({product.reviewCount || 0} reseñas)
                </span>
              </div>

              {/* Precio */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold" style={{ color: '#8c000f' }}>
                  {formatPrice(product.precio)}
                </span>
                {product.originalPrice && product.originalPrice > product.precio && (
                  <span className="text-xl line-through" style={{ color: '#f83258' }}>
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Stock */}
              <div className="mb-6">
                <span 
                  className="text-sm font-medium"
                  style={{ color: hasStock ? '#8c000f' : '#f83258' }}
                >
                  {hasStock ? `En stock: ${product.stock} unidades` : 'Sin stock'}
                </span>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#8c000f' }}>
                Descripción
              </h3>
              <p style={{ color: '#666' }}>
                {product.descripcion}
              </p>
            </div>

            {/* Cantidad y botones */}
            {hasStock && isActive && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium" style={{ color: '#8c000f' }}>
                    Cantidad:
                  </label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="px-4 py-2 border rounded text-center min-w-[60px]">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    className="flex-1"
                    style={{ backgroundColor: '#8c000f', color: '#fff' }}
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleWishlistToggle}
                    style={{
                      borderColor: '#f83258',
                      color: isWishlisted ? '#8c000f' : '#f83258'
                    }}
                  >
                    <Heart
                      className="h-4 w-4"
                      style={{
                        fill: isWishlisted ? '#8c000f' : 'none',
                        color: isWishlisted ? '#8c000f' : '#f83258'
                      }}
                    />
                  </Button>
                </div>
              </div>
            )}

            {(!hasStock || !isActive) && (
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#f6dae7' }}>
                <p style={{ color: '#8c000f' }}>
                  {!isActive ? 'Producto no disponible' : 'Producto sin stock'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}