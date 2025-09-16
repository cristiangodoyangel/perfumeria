import React from "react";

// Importar las imágenes directamente para asegurar la ruta correcta
import ellaImg from "../img/ella.png";
import elImg from "../img/el.png";
import bothImg from "../img/both.png";
import cosmImg from "../img/cosm.png";
import dessImg from "../img/dress.png";
import acceImg from "../img/acce.png";

const categories = [
  {
    img: ellaImg,
 
  
  },
  {
    img: elImg,
  
  
  },
  {
    img: bothImg,

  
  },
  {
    img: cosmImg,
  
  
  },

  {
    img: dessImg,
  
  
  },
  {
    img: acceImg,
    alt: "Accesorios",
  
  
  }
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col items-center rounded-xl shadow transition w-[150px]"
          style={{
            background: "#f6dae7", // Terciario
            boxShadow: "0 2px 8px 0 rgba(248,50,88,0.10)" // sombra rosa suave
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 15px 0 rgba(248,50,88,0.25)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px 0 rgba(248,50,88,0.10)"}
        >
          <img
            src={cat.img}
            alt={cat.alt}
            className="w-10 h-10 object-cover rounded-full mb-2"
        
          />
          <h3
            className="text-base font-semibold"
            style={{ color: "#8c000f" }}
          >
            {cat.name}
          </h3>
         
        </div>
      ))}
    </div>
  );
};

export default Categories;