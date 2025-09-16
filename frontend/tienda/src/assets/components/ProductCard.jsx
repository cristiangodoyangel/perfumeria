// src/assets/components/ProductCard.jsx
import { useState } from 'react';
import { Card, CardContent } from './ui/card.jsx';
import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('Added to cart:', product.id);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    console.log('Quick view:', product.id);
  };

  return (
    <Card
      className="group relative overflow-hidden border-0 shadow-md transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: '#ffffff',
        boxShadow: isHovered
          ? '0 8px 32px 0 rgba(248, 50, 88, 0.25)'
          : '0 2px 8px 0 rgba(140, 0, 15, 0.10)',
      }}
    >
      <CardContent className="p-0">
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 rounded-full"
                style={{
                  background: '#fff',
                  color: isWishlisted ? '#8c000f' : '#f83258',
                  border: `1px solid #f83258`,
                }}
                onClick={handleWishlistToggle}
              >
                <Heart
                  className="h-4 w-4"
                  style={{
                    fill: isWishlisted ? '#8c000f' : 'none',
                    color: isWishlisted ? '#8c000f' : '#f83258',
                  }}
                />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 rounded-full"
                style={{
                  background: '#fff',
                  color: '#f83258',
                  border: `1px solid #f83258`,
                }}
                onClick={handleQuickView}
              >
                <Eye className="h-4 w-4" style={{ color: '#f83258' }} />
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <Button
                className="w-full"
                style={{
                  background: product.inStock ? '#8c000f' : '#f83258',
                  color: '#fff',
                }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" style={{ color: '#fff' }} />
                {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div
            className="text-xs font-medium uppercase tracking-wide"
            style={{ color: '#8c000f' }}
          >
            {product.category}
          </div>
          <h3
            className="font-semibold group-hover:underline transition-colors line-clamp-2"
            style={{ color: '#8c000f' }}
          >
            {product.name}
          </h3>
          <p className="text-sm line-clamp-2" style={{ color: '#f83258' }}>
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4"
                  style={{
                    fill: i < Math.floor(product.rating) ? '#ffffffff' : 'none',
                    color: i < Math.floor(product.rating) ? '#f83258' : '#ccc',
                  }}
                />
              ))}
            </div>
            <span className="text-sm" style={{ color: '#8c000f' }}>
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold" style={{ color: '#8c000f' }}>
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm line-through" style={{ color: '#f83258' }}>
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="md:hidden">
            <Button
              className="w-full"
              style={{
                background: product.inStock ? '#8c000f' : '#f83258',
                color: '#fff',
              }}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" style={{ color: '#fff' }} />
              {product.inStock ? 'Agregar' : 'Agotado'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard; // Default export here
