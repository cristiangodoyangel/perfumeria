import { useState } from "react";
import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';
import { Sparkles, Gift, Truck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sensImge from '../img/banner/sensaciones.png';
import parejasImg from '../img/banner/parejas.png';
import rolImg from '../img/banner/rol.png';

const slides = [
  {
    badge: <span style={{ color: "var(--color-life-principal)" }}>
        "Nueva Colección 2025"
      </span>,
    title: (
      <>
        <span className="block" style={{ color: "var(--color-life-red)" }}>Descubre tu</span>
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
    badge: <span style={{ color: "var(--color-life-principal)" }}>
        "Especial Parejas"
      </span>,
     title: (
      <>
        <span className="block" style={{ color: "var(--color-life-red)" }}>Vive el placer</span>
        <span className="block" style={{ color: "var(--color-life-sec)" }}>en compañia</span>
      </>
    ),
     description:  (
      <span style={{ color: "var(--color-life-principal)" }}>
        Juguetes y accesorios para disfrutar juntos. ¡Explora nuestras novedades!
      </span>
    ),
    image: parejasImg
  },
 {
    badge: <span style={{ color: "var(--color-life-principal)" }}>
        "Lencería y Más"
      </span>,
     title: (
      <>
        <span className="block" style={{ color: "var(--color-life-red)" }}>Siéntete</span>
        <span className="block" style={{ color: "var(--color-life-sec)" }}>Aún más sexy</span>
      </>
    ),
     description:  (
      <span style={{ color: "var(--color-life-principal)" }}>
        Lencería  fina y seductora ¡Explora todo lo que tenemos para ti!
      </span>
    ),
    image: rolImg
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

              <div className="flex flex-col sm:flex-row gap-8 pl-16">
                <Button
                 variant="outline"
                  size="lg"
                  className="text-[var(--color-white)] bg-[var(--color-life-principal)] border-[var(--color-life-principal)] hover:bg-transparent hover:text-[var(--color-life-principal)] hover:border-[var(--color-life-principal)] px-8 py-6 text-lg"
                >
                  Explorar Productos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-[var(--color-white)] bg-[var(--color-life-principal)] border-[var(--color-life-principal)] hover:bg-transparent hover:text-[var(--color-life-principal)] hover:border-[var(--color-life-principal)] px-8 py-6 text-lg"

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