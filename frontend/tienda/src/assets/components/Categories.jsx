import React from "react";

const categories = [
  {
    img: "img/para_ella.jpg",
    alt: "Para Ella",
    name: "Para Ella",
    count: 156
  },
  {
    img: "img/para_el.jpg",
    alt: "Para Él",
    name: "Para Él",
    count: 98
  },
  {
    img: "img/parejas.jpg",
    alt: "Parejas",
    name: "Parejas",
    count: 87
  },
  {
    img: "img/cosmetica.jpg",
    alt: "Cosmética Erótica",
    name: "Cosmética Erótica",
    count: 72
  }
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col items-center rounded-xl shadow transition"
          style={{
            background: "#f6dae7", // Terciario
            boxShadow: "0 2px 8px 0 rgba(248,50,88,0.10)" // sombra rosa suave
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(248,50,88,0.25)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px 0 rgba(248,50,88,0.10)"}
        >
          <img
            src={cat.img}
            alt={cat.alt}
            className="w-20 h-20 object-cover rounded-full mb-2"
            style={{ border: "2px solid #f83258" }}
          />
          <h3
            className="text-base font-semibold"
            style={{ color: "#8c000f" }}
          >
            {cat.name}
          </h3>
          <p className="text-sm" style={{ color: "#f83258" }}>
            {cat.count} productos
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;