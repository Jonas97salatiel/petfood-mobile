import axios from 'axios';

const api = axios.create({
    baseURL: "https://petfood-backend.herokuapp.com/"
});

export default api;