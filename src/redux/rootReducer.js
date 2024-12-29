import { combineReducers } from '@reduxjs/toolkit';
import customerReducer from './customer/customerReducer';

const rootReducer = combineReducers({
  customer: customerReducer,
});

export default rootReducer;
