import React from "react";

// Importar las imágenes directamente para asegurar la ruta correcta
import ellaImg from "../img/ella.png";
import elImg from "../img/el.png";
import bothImg from "../img/both.png";
import cosmImg from "../img/cosm.png";
import dessImg from "../img/dress.png";
import acceImg from "../img/acce.png";

// Añadir identificadores únicos (id) a las categorías
const categories = [
  { id: 1, img: ellaImg, alt: "Para Ella" },
  { id: 2, img: elImg, alt: "Para Él" },
  { id: 3, img: bothImg, alt: "Para Parejas" },
  { id: 4, img: cosmImg, alt: "Cosmética Erótica" },
  { id: 5, img: dessImg, alt: "Lencería" },
  { id: 6, img: acceImg, alt: "Accesorios" },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-6">
      {categories.map((cat) => (
        <div
          key={cat.id} // Usar 'cat.id' como clave única
          className="flex flex-col items-center rounded-xl shadow transition w-[150px]"
          style={{
            background: "#f6dae7", // Terciario
            boxShadow: "0 2px 8px 0 rgba(248,50,88,0.10)" // Sombra rosa suave
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 15px 0 rgba(248,50,88,0.25)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 2px 8px 0 rgba(248,50,88,0.10)"}
        >
          <img
            src={cat.img}
            alt={cat.alt} // Usamos 'cat.alt' para el alt de la imagen
            className="w-10 h-10 object-cover rounded-full mb-2"
          />
          <h3
            className="text-base font-semibold"
            style={{ color: "#8c000f" }}
          >
            {cat.alt}  {/* Usamos 'cat.alt' ya que 'name' no está presente */}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
