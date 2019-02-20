import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-58671.firebaseio.com/'
});

export default instance;