import axios from 'axios';

const instance = axios.create({ //TODO: complete authentication and server side
    baseURL: "localhost:9092"
});

export default instance;