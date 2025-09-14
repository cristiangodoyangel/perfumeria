import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Truck, Shield, CreditCard, Award } from 'lucide-react';
import './Footer.css'; // Importamos el archivo CSS

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
    href: '#'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: '#'
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: '#'
  }
];

const features = [
  { icon: Truck, title: 'Envío Gratis', description: 'En compras sobre $30.000' },
  { icon: Shield, title: 'Compra Segura', description: 'Protección SSL 256 bits' },
  { icon: CreditCard, title: 'Múltiples Pagos', description: 'Webpay, transferencia y más' },
  { icon: Award, title: 'Calidad Garantizada', description: 'Productos certificados' }
];

export function Footer() {
  return (
    <footer className="footer">
      {/* Features section */}
      <div className="section">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="icon">
              <feature.icon className="h-6 w-6 text-life-red" />
            </div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main footer content */}
      <div className="section">
        <div className="column">
          {/* Logo and description */}
          <div className="logo">
            <span>LIFE Sex Shop</span>
          </div>
          <p>Tu tienda de confianza en productos íntimos. Discreción, calidad y experiencia garantizada.</p>

          {/* Contact information */}
          <div>
            <div><MapPin className="icon" /> Av. Argentina 2547, Antofagasta</div>
            <div><Phone className="icon" /> +56 55 234 5678</div>
            <div><Mail className="icon" /> contacto@lifesexshop.cl</div>
            <div><Clock className="icon" /> Lun - Sáb: 10:00 - 20:00</div>
          </div>

          {/* Social media */}
          <div>
            <h4>Síguenos</h4>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="social-icon">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Product links */}
        <div className="column">
          <h4>Productos</h4>
          <ul>
            {footerLinks.productos.map((link) => (
              <li key={link.name}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Information links */}
        <div className="column">
          <h4>Información</h4>
          <ul>
            {footerLinks.informacion.map((link) => (
              <li key={link.name}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Customer service links */}
        <div className="column">
          <h4>Atención al Cliente</h4>
          <ul>
            {footerLinks.atencion.map((link) => (
              <li key={link.name}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <h3>Mantente Informado</h3>
        <p>Recibe ofertas exclusivas y novedades en tu email</p>
        <div>
          <input type="email" placeholder="Tu email aquí..." />
          <button>Suscribirse</button>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bottom">
        <div>© 2024 LIFE Sex Shop. Todos los derechos reservados.</div>
        <div className="payment-methods">
          <span>Método de pago seguro:</span>
          <div>
            <span>WEBPAY</span>
            <span>VISA</span>
            <span>MC</span>
          </div>
        </div>
      </div>

      {/* Age verification */}
      <div className="age-verification">
        <p>🔞 Sitio solo para mayores de 18 años. Al continuar navegando, confirmas que eres mayor de edad.</p>
      </div>
    </footer>
  );
}
