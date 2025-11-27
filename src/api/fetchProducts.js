import axios from 'axios';


export const fetchDataFromApi = async () => {
    return axios.get('http://localhost:3000/products');
}

export const generateReview = async (review) => {
    return axios.post('http://localhost:3000/products/:id/reviews', review);
}