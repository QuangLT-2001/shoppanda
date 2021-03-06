import axios from 'axios';
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/api";
export const getListPostApi = () => {
  return axios.get(`${BASE_URL}/News`);
}
export const getPostIdApi = postId => {
  return axios.get(`${BASE_URL}/News/${postId}`);
}
export const createPostApi = post => {
  return axios.post(`${BASE_URL}/News`, post);
}