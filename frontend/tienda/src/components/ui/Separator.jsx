import React from "react";
import "./Separator.css";  // Asegúrate de importar el archivo CSS

function Separator({
  className,
  orientation = "horizontal",  // Por defecto es horizontal
  decorative = true,           // Por defecto es decorativo
  ...props
}) {
  const orientationClass = orientation === "vertical" ? "separator--vertical" : "separator--horizontal";
  const decorativeClass = decorative ? "separator--decorative" : "";

  return (
    <div
      className={`separator ${orientationClass} ${decorativeClass} ${className}`}
      {...props}
    />
  );
}

export { Separator };
