import { fetchCustomersStart, fetchCustomersSuccess, fetchCustomersFailure, addCustomer } from './customerReducer';
import { fetchCustomers, addCustomer as addCustomerApi } from './customerApi';

export const loadCustomers = () => async (dispatch) => {
  dispatch(fetchCustomersStart());
  try {
    const customers = await fetchCustomers();
    dispatch(fetchCustomersSuccess(customers));
  } catch (error) {
    dispatch(fetchCustomersFailure(error.message));
  }
};

export const createCustomer = (customerData) => async (dispatch) => {
  try {
    const newCustomer = await addCustomerApi(customerData);
    dispatch(addCustomer(newCustomer));
  } catch (error) {
    console.error('Error adding customer:', error);
  }
};
