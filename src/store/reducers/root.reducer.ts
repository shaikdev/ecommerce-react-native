import {combineReducers} from 'redux';
import HomeScreenReducers from './home.screen.reducer';
import ProductReducers from './product.reducers';
import FilterReducer from './filter.screen.reducer';
export default combineReducers({
  home: HomeScreenReducers,
  product:ProductReducers,
  filter:FilterReducer
});
