import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  searchTerm: SearchReducer
});

export default rootReducer;
