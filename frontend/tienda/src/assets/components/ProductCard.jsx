import { useState } from 'react';
import { Card, CardContent } from './ui/card.jsx';
import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Default product data if none provided
  const defaultProduct = {
    id: 1,
    name: 'Producto Premium',
    description: 'Descripción del producto de alta calidad',
    price: 29990,
    originalPrice: 39990,
    discount: 25,
    rating: 4.5,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1602177719868-98d27643bf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwcGFja2FnZXxlbnwxfHx8fDE3NTc4MjYxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isNew: false,
    isOnSale: true,
    inStock: true,
    category: 'Para Ella'
  };

  const productData = product || defaultProduct;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', productData.id);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    // Quick view logic here
    console.log('Quick view:', productData.id);
  };

  return (
    <Card
      className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Product image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-life-light-pink/20 to-white">
          <ImageWithFallback
            src={productData.image}
            alt={productData.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Overlay with actions - only show on hover */}
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="bg-white/90 hover:bg-white text-gray-700 h-8 w-8 p-0 rounded-full"
                onClick={handleWishlistToggle}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-life-red text-life-red' : ''}`} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="bg-white/90 hover:bg-white text-gray-700 h-8 w-8 p-0 rounded-full"
                onClick={handleQuickView}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <Button 
                className="w-full bg-life-red hover:bg-life-dark-red text-white"
                onClick={handleAddToCart}
                disabled={!productData.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {productData.inStock ? 'Agregar al Carrito' : 'Agotado'}
              </Button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {productData.isNew && (
              <Badge className="bg-life-pink text-white border-0">
                Nuevo
              </Badge>
            )}
            {productData.isOnSale && productData.discount && (
              <Badge className="bg-life-red text-white border-0">
                -{productData.discount}%
              </Badge>
            )}
            {!productData.inStock && (
              <Badge variant="secondary" className="bg-gray-500 text-white border-0">
                Agotado
              </Badge>
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <div className="text-xs text-life-red font-medium uppercase tracking-wide">
            {productData.category}
          </div>

          {/* Product name */}
          <h3 className="font-semibold text-gray-900 group-hover:text-life-red transition-colors line-clamp-2">
            {productData.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {productData.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(productData.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {productData.rating} ({productData.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-life-red">
              {formatPrice(productData.price)}
            </span>
            {productData.originalPrice && productData.originalPrice > productData.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(productData.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile add to cart button */}
          <div className="md:hidden">
            <Button 
              className="w-full bg-life-red hover:bg-life-dark-red text-white"
              onClick={handleAddToCart}
              disabled={!productData.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {productData.inStock ? 'Agregar' : 'Agotado'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
