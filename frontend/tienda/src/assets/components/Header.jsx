import { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
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
  const [userName, setUserName] = useState('');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuRef = useRef(null); // Referencia para el submenú

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
        // Usar username, first_name, o el nombre completo
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

  // Verificar si el usuario está logueado
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        
        console.log('Token decodificado:', decodedToken);
        
        // Verificamos si el token tiene un campo 'username' y si no, obtenemos los datos del usuario
        if (decodedToken.username) {
          setUserName(decodedToken.username);
        } else if (decodedToken.user_id) {
          // Hacer petición para obtener el nombre real del usuario
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
    };

    // Agregar event listener cuando el submenú está abierto
    if (isSubMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup del event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSubMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setUserName('');
    window.location.href = '/login';
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
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
            <img src={logo} alt="Logo Life" className="h-16 w-auto object-contain" />
          </div>

          {/* Barra de búsqueda */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#f6dae7' }} />
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

      </div>

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
    </header>
  );
}