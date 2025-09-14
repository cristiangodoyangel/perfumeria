import { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

const categories = [
  'Para Ella',
  'Para Él', 
  'Parejas',
  'Afrodisíacos',
  'Cosmética Erótica',
  'Lencería',
  'Accesorios'
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3); // Mock cart count

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top announcement bar */}
      <div className="gradient-life text-white py-2 px-4 text-center">
        <p>Envío gratis en compras sobre $30.000 | Retira en nuestra tienda sin costo</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="h-10 w-20 bg-gradient-to-r from-life-red to-life-pink rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LIFE</span>
            </div>
          </div>

          {/* Search bar - prominent center placement */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Busca productos, categorías..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-12 border-2 border-life-pink/20 focus:border-life-pink rounded-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* User account */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Mi Cuenta</span>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-life-pink text-white"
              >
                2
              </Badge>
            </Button>

            {/* Shopping cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-life-red text-white"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile menu toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Busca productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 h-10 border-2 border-life-pink/20 focus:border-life-pink rounded-full"
            />
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block border-t border-border">
          <div className="flex items-center justify-center gap-8 py-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="hover:text-life-red hover:bg-life-light-pink/50 transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start">
                <User className="h-4 w-4 mr-2" />
                Mi Cuenta
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="justify-start hover:text-life-red hover:bg-life-light-pink/50"
                >
                  {category}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
