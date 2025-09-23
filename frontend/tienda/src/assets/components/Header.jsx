import { useState, useEffect, useRef } from 'react';
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

export function Header({ onSearchResults }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const subMenuRef = useRef(null);
  const searchRef = useRef(null);
  const searchTimeout = useRef(null);

  // Función para obtener datos del usuario
  const fetchUserData = async (userId, token) => {
    try {
      const response = await fetch(`http://localhost:8000/api/usuarios/${userId}/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const userData = await response.json();
        const displayName = userData.username || 
                           userData.first_name || 
                           (userData.first_name && userData.last_name ? `${userData.first_name} ${userData.last_name}` : null) ||
                           `Usuario ${userId}`;
        setUserName(displayName);
      } else {
        console.error('Error al obtener datos del usuario:', response.status);
        setUserName(`Usuario ${userId}`);
      }
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
      setUserName(`Usuario ${userId}`);
    }
  };

  // Función para buscar productos en el backend
  const searchProducts = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    setIsSearching(true);
    try {
      // Buscar usando el parámetro search del backend con Django Filter
      const response = await fetch(
        `http://localhost:8000/api/productos/?search=${encodeURIComponent(query)}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (response.ok) {
        const products = await response.json();
        setSearchResults(products.slice(0, 8)); // Limitar a 8 resultados para el dropdown
        setShowSearchResults(true);
        
        // Si hay una función callback para manejar resultados completos
        if (onSearchResults) {
          onSearchResults(products, query);
        }
      } else {
        console.error('Error en la búsqueda:', response.status);
        setSearchResults([]);
        setShowSearchResults(true);
      }
    } catch (error) {
      console.error('Error al buscar productos:', error);
      setSearchResults([]);
      setShowSearchResults(true);
    } finally {
      setIsSearching(false);
    }
  };

  // Debounce para la búsqueda
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Limpiar timeout anterior
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    // Establecer nuevo timeout
    searchTimeout.current = setTimeout(() => {
      searchProducts(query);
    }, 300); // Esperar 300ms después de que el usuario deje de escribir
  };

  // Manejar envío del formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
      setShowSearchResults(false);
      // Aquí podrías redirigir a una página de resultados
      // window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Manejar clic en un resultado de búsqueda
  const handleSearchResultClick = (product) => {
    setShowSearchResults(false);
    setSearchQuery('');
    // Navegar al producto específico
    window.location.href = `/producto/${product.id}`;
  };

  // Verificar si el usuario está logueado
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        
        if (decodedToken.username) {
          setUserName(decodedToken.username);
        } else if (decodedToken.user_id) {
          fetchUserData(decodedToken.user_id, token);
        } else {
          console.warn('El token no contiene un campo "username" ni "user_id"');
        }
        
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []);

  // Cerrar submenú al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setIsSubMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    if (isSubMenuOpen || showSearchResults) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSubMenuOpen, showSearchResults]);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setUserName('');
    window.location.href = '/login';
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Función para manejar clic en logo (ir a inicio)
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow">
      {/* Barra de anuncio superior */}
      <div className="py-2 px-4 text-center text-white" style={{ background: 'linear-gradient(to right, #8c000f, #f83258)' }}>
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
              className="h-16 w-auto object-contain cursor-pointer" 
              onClick={handleLogoClick}
            />
          </div>

          {/* Barra de búsqueda */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#f6dae7' }} />
              <Input
                type="search"
                placeholder="Busca productos, categorías..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 h-12 border-2 rounded-full"
                style={{
                  borderColor: '#f83258',
                  backgroundColor: '#fff',
                  color: '#8c000f'
                }}
              />
              
              {/* Dropdown de resultados de búsqueda */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                  {isSearching ? (
                    <div className="p-4 text-center" style={{ color: '#8c000f' }}>
                      Buscando productos...
                    </div>
                  ) : searchResults.length > 0 ? (
                    <>
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                          onClick={() => handleSearchResultClick(product)}
                        >
                          <img
                            src={product.imagen}
                            alt={product.nombre}
                            className="w-12 h-12 object-cover rounded mr-3"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yNCAzNkMzMC42Mjc0IDM2IDM2IDMwLjYyNzQgMzYgMjRDMzYgMTcuMzcyNiAzMC42Mjc0IDEyIDI0IDEyQzE3LjM3MjYgMTIgMTIgMTcuMzcyNiAxMiAyNEMxMiAzMC42Mjc0IDE3LjM3MjYgMzYgMjQgMzZaIiBmaWxsPSIjZTFlNWU5Ii8+Cjwvc3ZnPgo=';
                            }}
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm" style={{ color: '#8c000f' }}>
                              {product.nombre}
                            </h4>
                            <p className="text-xs" style={{ color: '#f83258' }}>
                              {product.categoria}
                            </p>
                            <p className="text-sm font-semibold" style={{ color: '#8c000f' }}>
                              {formatPrice(product.precio)}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="p-3 border-t bg-gray-50">
                        <button
                          type="submit"
                          className="w-full text-center text-sm font-medium"
                          style={{ color: '#f83258' }}
                        >
                          Ver todos los resultados para "{searchQuery}"
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="p-4 text-center" style={{ color: '#8c000f' }}>
                      No se encontraron productos para "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            {/* Cuenta de usuario */}
            {userName ? (
              <div className="relative" ref={subMenuRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center gap-2"
                  style={{ color: '#8c000f' }}
                  onClick={toggleSubMenu}
                >
                  <User className="h-4 w-4" />
                  <span className="hidden lg:inline">{userName}</span>
                </Button>

                {/* Submenú */}
                {isSubMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Button variant="ghost" className="w-full text-left px-4 py-2 hover:bg-gray-100" style={{ color: '#8c000f' }}>
                        Pedidos
                      </Button>
                      <Button variant="ghost" className="w-full text-left px-4 py-2 hover:bg-gray-100" style={{ color: '#8c000f' }}>
                        Lista de Deseados
                      </Button>
                      <Button variant="ghost" className="w-full text-left px-4 py-2 hover:bg-gray-100" style={{ color: '#8c000f' }}>
                        Carrito de Compra
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        style={{ color: '#f83258' }}
                        onClick={handleLogout}
                      >
                        Cerrar Sesión
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center gap-2"
                style={{ color: '#8c000f' }}
                onClick={() => window.location.href = '/login'}
              >
                <User className="h-4 w-4" />
                <span className="hidden lg:inline">Iniciar Sesión</span>
              </Button>
            )}

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
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => window.location.href = '/carrito'}
            >
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
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
              style={{ color: '#f6dae7' }}
            />
            <Input
              type="search"
              placeholder="Busca productos..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 h-10 border-2 rounded-full"
              style={{
                borderColor: '#f83258',
                backgroundColor: '#fff',
                color: '#8c000f'
              }}
            />
          </form>
        </div>

        {/* Navegación de escritorio */}
        <nav className="hidden md:block border-t" style={{ borderColor: '#f6dae7' }}>
          <div className="flex items-center justify-center gap-8 py-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="transition-colors"
                style={{ color: '#8c000f' }}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#f83258';
                  e.currentTarget.style.backgroundColor = '#f6dae7';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = '#8c000f';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onClick={() => window.location.href = `/categoria/${encodeURIComponent(category)}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </nav>
      </div>

      {/* Navegación móvil */}
      {isMenuOpen && (
        <nav className="md:hidden border-t py-4" style={{ borderColor: '#f6dae7' }}>
          <div className="flex flex-col gap-2 px-4">
            <Button
              variant="ghost"
              className="justify-start"
              style={{ color: '#8c000f' }}
              onClick={() => window.location.href = '/login'}
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
                onClick={() => window.location.href = `/categoria/${encodeURIComponent(category)}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}