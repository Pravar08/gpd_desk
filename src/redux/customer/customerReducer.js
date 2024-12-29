import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchCustomersStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCustomersSuccess: (state, action) => {
      state.isLoading = false;
      state.customers = action.payload;
    },
    fetchCustomersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
  },
});

export const {
  fetchCustomersStart,
  fetchCustomersSuccess,
  fetchCustomersFailure,
  addCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;
