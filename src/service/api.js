import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3500',
    headers: {
        Authorization: `Bearer ${localStorage.token}`,
    },
});

export default api;
