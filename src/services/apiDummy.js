import axios from 'axios';

// URL de los productos y tiempo máximo de espera de 10 segundos.
export const apiDummy = axios.create({
    baseURL: 'https://dummyjson.com/products/category/groceries',
    timeout: 10000, 
});
