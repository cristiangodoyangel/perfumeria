import { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import logo from '../img/logo.png';

const categories = [
  'Para Ella',
  'Para Él', 
  'Parejas',
  'Cosmética Erótica',
  'Lencería',
  'Accesorios'
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow">
      {/* Barra de anuncio superior */}
      <div
        className="py-2 px-4 text-center text-white"
        style={{
          background: 'linear-gradient(to right, #8c000f, #f83258)'
        }}
      >
        <p>Envío gratis en compras sobre $30.000 | Retira en nuestra tienda sin costo</p>
      </div>

      {/* Header principal */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 pl-8">
            <img
              src={logo}
              alt="Logo Life"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Barra de búsqueda */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                style={{ color: '#f6dae7' }}
              />
              <Input
                type="search"
                placeholder="Busca productos, categorías..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-12 border-2 rounded-full"
                style={{
                  borderColor: '#f83258',
                  backgroundColor: '#fff',
                  color: '#8c000f'
                }}
              />
            </div>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            {/* Cuenta de usuario */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-2"
              style={{ color: '#8c000f' }}
            >
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Mi Cuenta</span>
            </Button>

            {/* Lista de deseos */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" style={{ color: '#f83258' }} />
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-white"
                style={{ backgroundColor: '#f83258' }}
              >
                2
              </Badge>
            </Button>

            {/* Carrito de compras */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" style={{ color: '#8c000f' }} />
              {cartCount > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-white"
                  style={{ backgroundColor: '#8c000f' }}
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Menú móvil */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              style={{ color: '#8c000f' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Búsqueda en móvil */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
              style={{ color: '#f6dae7' }}
            />
            <Input
              type="search"
              placeholder="Busca productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 h-10 border-2 rounded-full"
              style={{
                borderColor: '#f83258',
                backgroundColor: '#fff',
                color: '#8c000f'
              }}
            />
          </div>
        </div>

        {/* Navegación de escritorio */}
        <nav className="hidden md:block border-t" style={{ borderColor: '#f6dae7' }}>
          <div className="flex items-center justify-center gap-8 py-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="transition-colors"
                style={{
                  color: '#8c000f'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#f83258';
                  e.currentTarget.style.backgroundColor = '#f6dae7';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = '#8c000f';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </nav>

        {/* Navegación móvil */}
        {isMenuOpen && (
          <nav className="md:hidden border-t py-4" style={{ borderColor: '#f6dae7' }}>
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="justify-start"
                style={{ color: '#8c000f' }}
              >
                <User className="h-4 w-4 mr-2" />
                Mi Cuenta
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="justify-start"
                  style={{ color: '#8c000f' }}
                  onMouseOver={e => {
                    e.currentTarget.style.color = '#f83258';
                    e.currentTarget.style.backgroundColor = '#f6dae7';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.color = '#8c000f';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
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