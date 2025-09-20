// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/productos/';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Devuelve los datos de los productos
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
