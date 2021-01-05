import axios from 'axios';

// TODO figure out with nice way to add path to dest server
axios.defaults.baseURL = `http://localhost:3000/form`;
axios.defaults.headers = { 'Content-Type': 'application/json' };

export const postService = async (data: Object = {}) => {
  let res = await axios.post('', data, axios.defaults.headers);
  return await res.data;
};
