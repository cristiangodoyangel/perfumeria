import React from "react";


const Categories = () => {
  return (
    <section className="categories">
      <h2>Explora nuestras categorías</h2>
      <div className="category-list">
        <div className="category">
          <img src="img/para_ella.jpg" alt="Para Ella" />
          <h3>Para Ella</h3>
          <p>156 productos</p>
        </div>
        <div className="category">
          <img src="img/para_el.jpg" alt="Para Él" />
          <h3>Para Él</h3>
          <p>98 productos</p>
        </div>
        <div className="category">
          <img src="img/parejas.jpg" alt="Parejas" />
          <h3>Parejas</h3>
          <p>87 productos</p>
        </div>
        <div className="category">
          <img src="img/cosmetica.jpg" alt="Cosmética" />
          <h3>Cosmética Erótica</h3>
          <p>72 productos</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
