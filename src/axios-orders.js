import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-baede.firebaseio.com/'
});

export default instance;