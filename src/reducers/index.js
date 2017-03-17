import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';
import CartReducer from './cart_reducer';

const rootReducer = combineReducers({
  searchTerm: SearchReducer,
  cartHandle: CartReducer
});

export default rootReducer;
