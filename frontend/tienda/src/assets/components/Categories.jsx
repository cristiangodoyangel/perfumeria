import React from "react";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
      <div className="flex flex-col items-center bg-rose-100 rounded-xl shadow p-4 hover:shadow-lg transition">

        <img src="img/para_ella.jpg" alt="Para Ella" className="w-20 h-20 object-cover rounded-full mb-2" />
        <h3 className="text-base font-semibold text-gray-800">Para Ella</h3>
        <p className="text-sm text-gray-500">156 productos</p>
      </div>
      <div className="flex flex-col items-center bg-rose-100 rounded-xl shadow p-4 hover:shadow-lg transition">

        <img src="img/para_el.jpg" alt="Para Él" className="w-20 h-20 object-cover rounded-full mb-2" />
        <h3 className="text-base font-semibold text-gray-800">Para Él</h3>
        <p className="text-sm text-gray-500">98 productos</p>
      </div>
      <div className="flex flex-col items-center bg-rose-100 rounded-xl shadow p-4 hover:shadow-lg transition">

        <img src="img/parejas.jpg" alt="Parejas" className="w-20 h-20 object-cover rounded-full mb-2" />
        <h3 className="text-base font-semibold text-gray-800">Parejas</h3>
        <p className="text-sm text-gray-500">87 productos</p>
      </div>
      <div className="flex flex-col items-center bg-rose-100 rounded-xl shadow p-4 hover:shadow-lg transition">

        <img src="img/cosmetica.jpg" alt="Cosmética Erótica" className="w-20 h-20 object-cover rounded-full mb-2" />
        <h3 className="text-base font-semibold text-gray-800">Cosmética Erótica</h3>
        <p className="text-sm text-gray-500">72 productos</p>
      </div>
    </div>
  );
};

export default Categories;