import axios from 'axios';

export const getProduct = (limit) =>
  axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
export const getJson = () =>
  axios.get(`https://jsonplaceholder.typicode.com/posts`);
export const getDetailProuct = (id) =>
  axios.get(`https://fakestoreapi.com/products/${id}`);
