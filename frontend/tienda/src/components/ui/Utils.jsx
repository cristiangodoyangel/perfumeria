import { clsx } from "clsx";

export function cn(...inputs) {  // Elimina ": ClassValue[]"
  return clsx(inputs); // Solo usa clsx para combinar clases sin merge
}
