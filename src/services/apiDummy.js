import axios from 'axios';

export const apiDummy = axios.create({
    baseURL: 'https://dummyjson.com/products/category/groceries',
    timeout: 10000, 
});