// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/productos/';
const BASE_URL = 'http://127.0.0.1:8000/'; 

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Devuelve los datos de los productos
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const api = axios.create({
  baseURL: BASE_URL,
});

// Función para obtener el token del almacenamiento local
const getAuthToken = () => {
  return localStorage.getItem('access_token');
};

// Interceptor para añadir el token JWT en las peticiones
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;