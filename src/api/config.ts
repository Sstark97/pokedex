import axios from 'axios';

const URL = process.env.POKE_API ?? 'https://pokeapi.co/api/v2/';

const axiosInstance = axios.create({
    baseURL: URL,
});

export default axiosInstance;