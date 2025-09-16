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
            <Separator />

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            {/* Datos y dirección */}
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
                            {/* Redes sociales alineadas a la derecha y arriba */}
                            <div className="flex flex-col items-end justify-start mt-0">
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
                    </div>
                </div>
            </div>

            <Separator />
            <Separator />

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