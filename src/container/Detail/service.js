import axious from 'axios';
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/";
export const getListProductDetailApi = productId => {
  return axious.get(`${BASE_URL}/${productId}`);
}