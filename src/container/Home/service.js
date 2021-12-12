import axios from 'axios';
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/";
export const getListProductApi = () => {
  return axios.get(`${BASE_URL}/Products`);
}
export const getListProductIdApi = productId => {
  return axios.get(`${BASE_URL}/Products/${productId}`);
}
export const createProductApi = product => {
  return axios.post(`${BASE_URL}/Products`, product);
}