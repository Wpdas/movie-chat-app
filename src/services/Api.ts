import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://tender-mclean-00a2bd.netlify.app/web/',
});

export default Api;
