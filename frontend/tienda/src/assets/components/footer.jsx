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
    color: 'hover:text-blue-600'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: '#',
    color: 'hover:text-pink-600'
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: '#',
    color: 'hover:text-blue-400'
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
    <footer className="bg-gradient-to-b from-life-light-pink to-white border-t">
      {/* Features section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-life-red/10 p-3 rounded-full">
                <feature.icon className="h-6 w-6 text-life-red" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
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
              <div className="h-12 w-24 bg-gradient-to-r from-life-red to-life-pink rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">LIFE</span>
              </div>
            </div>

            <p className="text-gray-600 max-w-md">
              Tu tienda de confianza en Antofagasta para productos íntimos de calidad premium. 
              Discreción, calidad y experiencia garantizada.
            </p>

            {/* Contact information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-life-red" />
                <span>Av. Argentina 2547, Antofagasta</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5 text-life-red" />
                <span>+56 55 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5 text-life-red" />
                <span>contacto@lifesexshop.cl</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="h-5 w-5 text-life-red" />
                <span>Lun - Sáb: 10:00 - 20:00</span>
              </div>
            </div>

            {/* Social media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className={`h-10 w-10 p-0 border-gray-300 ${social.color} transition-colors`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-life-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Información</h4>
            <ul className="space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-life-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atención al Cliente */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Atención al Cliente</h4>
            <ul className="space-y-3">
              {footerLinks.atencion.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-life-red transition-colors"
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
        <div className="bg-gradient-to-r from-life-red to-life-pink rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">
            Mantente Informado
          </h3>
          <p className="text-white/90 mb-6">
            Recibe ofertas exclusivas y novedades en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email aquí..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-life-red hover:bg-white/90 px-6">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2024 LIFE Sex Shop. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Método de pago seguro:</span>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                WEBPAY
              </div>
              <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-semibold">
                VISA
              </div>
              <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                MC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Age verification notice */}
      <div className="bg-life-red text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            🔞 Sitio solo para mayores de 18 años. Al continuar navegando, confirmas que eres mayor de edad.
          </p>
        </div>
      </div>
    </footer>
  );
}
