import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3000/posts`;
axios.defaults.headers = { 'Content-Type': 'application/json' };

export const apiService = async (data: Object = {}) => {
    let res = await axios.post('', data, axios.defaults.headers);
    return await res.data;
  };

