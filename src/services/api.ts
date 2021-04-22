import axios from 'axios';

const api = axios.create({
    baseURL: 'httpp://localhost:3333/'
})

export default api