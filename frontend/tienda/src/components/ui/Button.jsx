import React from "react";
import "./Button.css"; // Asegúrate de importar el archivo CSS

function Button({
  className,
  variant = "default", // Valor por defecto para la variante
  size = "default",    // Valor por defecto para el tamaño
  asChild = false,
  ...props
}) {
  const Comp = asChild ? "span" : "button"; // Cambia entre <button> o <span> si es necesario

  return (
    <Comp
      {...props}
      className={`button button--${variant} button--${size} ${className}`} // Aplica las clases basadas en la variante y tamaño
    />
  );
}

export { Button };
