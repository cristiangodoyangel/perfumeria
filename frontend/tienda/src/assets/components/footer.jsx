import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  Shield,
  Truck,
  CreditCard,
  Award
} from 'lucide-react';
import logo from '../img/logo.png';

const footerLinks = {
  productos: [
    { name: 'Para Ella', href: '#' },
    { name: 'Para Él', href: '#' },
    { name: 'Parejas', href: '#' },
    { name: 'Lencería', href: '#' },
    { name: 'Cosmética Erótica', href: '#' },
    { name: 'Afrodisíacos', href: '#' },
    { name: 'Accesorios', href: '#' }
  ],
  informacion: [
    { name: 'Sobre Nosotros', href: '#' },
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Envíos y Devoluciones', href: '#' },
    { name: 'Preguntas Frecuentes', href: '#' },
    { name: 'Guía de Tallas', href: '#' }
  ],
  atencion: [
    { name: 'Contacto', href: '#' },
    { name: 'Chat en Línea', href: '#' },
    { name: 'Seguimiento de Pedido', href: '#' },
    { name: 'Cambios y Devoluciones', href: '#' },
    { name: 'Garantía', href: '#' }
  ]
};

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: Facebook, 
    href: '#',
    color: '#4267B2'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: '#',
    color: '#E1306C'
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: '#',
    color: '#1DA1F2'
  }
];

const features = [
  {
    icon: Truck,
    title: 'Envío Gratis',
    description: 'En compras sobre $30.000'
  },
  {
    icon: Shield,
    title: 'Compra Segura',
    description: 'Protección SSL 256 bits'
  },
  {
    icon: CreditCard,
    title: 'Múltiples Pagos',
    description: 'Webpay, transferencia y más'
  },
  {
    icon: Award,
    title: 'Calidad Garantizada',
    description: 'Productos certificados'
  }
];

export function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(to bottom, #f6dae7, #fff)', borderTop: '1px solid #f83258' }}>
      {/* Features section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div style={{ background: '#f832581A' }} className="p-3 rounded-full">
                <feature.icon className="h-6 w-6" style={{ color: '#8c000f' }} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#8c000f' }}>{feature.title}</h3>
                <p className="text-sm" style={{ color: '#f83258' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
                <div className="flex items-center flex-shrink-0 pl-8">
                         <img
                           src={logo}
                           alt="Logo Life"
                           className="h-16 w-auto object-contain"
                         />
                       </div>
            </div>

            <p style={{ color: '#8c000f' }} className="max-w-md">
              Tu tienda de confianza en Antofagasta para productos íntimos de calidad premium. 
              Discreción, calidad y experiencia garantizada.
            </p>

            {/* Contact information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3" style={{ color: '#f83258' }}>
                <MapPin className="h-5 w-5" style={{ color: '#8c000f' }} />
                <span>Av. Argentina 2547, Antofagasta</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: '#f83258' }}>
                <Phone className="h-5 w-5" style={{ color: '#8c000f' }} />
                <span>+56 55 234 5678</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: '#f83258' }}>
                <Mail className="h-5 w-5" style={{ color: '#8c000f' }} />
                <span>contacto@lifesexshop.cl</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: '#f83258' }}>
                <Clock className="h-5 w-5" style={{ color: '#8c000f' }} />
                <span>Lun - Sáb: 10:00 - 20:00</span>
              </div>
            </div>

            {/* Social media */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#8c000f' }}>Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="h-10 w-10 p-0 border-gray-300 transition-colors"
                    style={{
                      borderColor: '#f83258',
                      color: social.color,
                      background: '#f6dae7'
                    }}
                  >
                    <social.icon className="h-5 w-5" style={{ color: social.color }} />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#8c000f' }}>Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    style={{ color: '#f83258' }}
                    className="transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#8c000f' }}>Información</h4>
            <ul className="space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    style={{ color: '#f83258' }}
                    className="transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atención al Cliente */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#8c000f' }}>Atención al Cliente</h4>
            <ul className="space-y-3">
              {footerLinks.atencion.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    style={{ color: '#f83258' }}
                    className="transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Newsletter section */}
      <div className="container mx-auto px-4 py-8">
        <div
          className="rounded-2xl p-8 text-center"
          style={{ background: 'linear-gradient(to right, #8c000f, #f83258)', color: '#fff' }}
        >
          <h3 className="text-xl font-bold mb-2">
            Mantente Informado
          </h3>
          <p style={{ color: '#f6dae7' }} className="mb-6">
            Recibe ofertas exclusivas y novedades en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email aquí..."
              className="flex-1 px-4 py-3 rounded-lg"
              style={{
                color: '#8c000f',
                background: '#f6dae7',
                border: '1px solid #f83258'
              }}
            />
            <Button
              className="px-6"
              style={{
                background: '#fff',
                color: '#8c000f',
                border: '1px solid #f83258'
              }}
            >
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div style={{ color: '#8c000f' }} className="text-sm">
            © 2024 LIFE Sex Shop. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center gap-4 text-sm" style={{ color: '#f83258' }}>
            <span>Método de pago seguro:</span>
            <div className="flex items-center gap-2">
              <div style={{ background: '#8c000f', color: '#fff' }} className="px-2 py-1 rounded text-xs font-semibold">
                WEBPAY
              </div>
              <div style={{ background: '#f83258', color: '#fff' }} className="px-2 py-1 rounded text-xs font-semibold">
                VISA
              </div>
              <div style={{ background: '#f6dae7', color: '#8c000f', border: '1px solid #f83258' }} className="px-2 py-1 rounded text-xs font-semibold">
                MC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Age verification notice */}
      <div style={{ background: '#8c000f', color: '#fff' }} className="py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            🔞 Sitio solo para mayores de 18 años. Al continuar navegando, confirmas que eres mayor de edad.
          </p>
        </div>
      </div>
    </footer>
  );
}