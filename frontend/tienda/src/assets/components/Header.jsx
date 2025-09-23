import { useState, useEffect } from 'react';
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

  // Verificar si el usuario está logueado
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        
        console.log('Token decodificado:', decodedToken);  // Aquí mostramos todo el token para ver qué contiene
        
        // Verificamos si el token tiene un campo 'username' y si no, usamos el 'user_id'
        if (decodedToken.username) {
          setUserName(decodedToken.username);
        } else if (decodedToken.user_id) {
          setUserName(`Usuario ${decodedToken.user_id}`);  // Asumimos que el user_id es el identificador
        } else {
          console.warn('El token no contiene un campo "username" ni "user_id"');
        }
        
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setUserName(''); // Limpiar el nombre del usuario cuando se cierre sesión
    window.location.href = '/login'; // Redirigir al login
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

          {/* Acciones */}
          <div className="flex items-center gap-2">
            {/* Cuenta de usuario */}
            {userName ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center gap-2"
                  style={{ color: '#8c000f' }}
                >
                  <User className="h-4 w-4" />
                  <span className="hidden lg:inline">{userName}</span>
                </Button>

                {/* Botón de cerrar sesión */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center gap-2"
                  style={{ color: '#f83258' }}
                  onClick={handleLogout} // Llamar a la función de cerrar sesión
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              // Si no está logueado, mostrar el botón "Iniciar Sesión"
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
      </div>
    </header>
  );
}
