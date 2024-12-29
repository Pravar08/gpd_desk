import axios from 'axios';

const API_URL = '/api/customers';

export const fetchCustomers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addCustomer = async (customerData) => {
  const response = await axios.post(API_URL, customerData);
  return response.data;
};
