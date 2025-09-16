import { useState } from "react";
import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';
import { Sparkles, Gift, Truck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sensImge from '../img/banner/sensaciones.png';

const slides = [
  {
    badge: "Nueva Colección 2025",
    title: (
      <>
        Descubre tu
        <span className="block" style={{ color: "var(--color-life-sec)" }}>Lado Más Íntimo</span>
      </>
    ),
    description:  (
      <span style={{ color: "var(--color-life-principal)" }}>
        Productos de calidad premium para parejas que buscan explorar y conectar
      </span>
    ),
    image: sensImge
  },
  {
    badge: "Especial Parejas",
    title: (
      <>
        Vive el
        <span className="block" style={{ color: "#f83258" }}>Placer en Compañía</span>
      </>
    ),
    description: "Juguetes y accesorios para disfrutar juntos. ¡Explora nuestras novedades!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1080&q=80"
  },
  {
    badge: "Regalos Discretos",
    title: (
      <>
        Sorprende con
        <span className="block" style={{ color: "#8c000f" }}>Detalles Únicos</span>
      </>
    ),
    description: "Envío anónimo y envoltorio especial para sorprender a quien más quieres.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=80"
  }
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden">
      {/* Main hero carousel */}
      <div
        className="relative min-h-[500px] flex items-center"
        style={{
          background: 'var(--color-life-ter)'
        }}
      >
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-white space-y-6">
              <Badge className="bg-white/20 text-white border-0 px-4 py-2 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                {slides[current].badge}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
                {slides[current].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                 variant="outline"
                  size="lg"
                  className="bg-sec-500 border-white text-white hover:bg-red hover:text-life-red px-8 py-6 text-lg"
                >
                  Explorar Productos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg--color-life-sec border-white text-white hover:bg-red hover:text-life-pink px-8 py-6 text-lg"
                >
                  Ver Ofertas
                </Button>
              </div>
              {/* Carousel controls */}
              <div className="flex gap-2 mt-6">
                <Button
                  variant="ghost"
                  className="text-white border-white hover:bg-white hover:text-life-red"
                  onClick={prevSlide}
                  aria-label="Anterior"
                >
                  ◀
                </Button>
                <Button
                  variant="ghost"
                  className="text-white border-white hover:bg-white hover:text-life-red"
                  onClick={nextSlide}
                  aria-label="Siguiente"
                >
                  ▶
                </Button>
              </div>
              {/* Dots */}
              <div className="flex gap-2 mt-2">
                {slides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/30'}`}
                    style={{ border: idx === current ? '2px solid #f83258' : 'none' }}
                  />
                ))}
              </div>
            </div>
            {/* Hero image */}
            <div className="hidden lg:block">
              <div className="relative">
                <ImageWithFallback
                  src={slides[current].image}
                  alt="Hero"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>



   
    
    </section>
  );
}