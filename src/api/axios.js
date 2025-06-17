import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://star-isih.onrender.com', 
  withCredentials: true
});

export default instance;