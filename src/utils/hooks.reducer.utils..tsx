import {CATEGORY, PRICE, RATING, DELIVERY_TIME} from 'utils/types.utils';

export const filterInitialState = {
  category: '',
  price: '',
  rating: '',
  delivery_time: '',
};

const filterReducerHook = (state:any, action: any) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case PRICE:
      return {
        ...state,
        price: action.payload || 100,
      };
    case RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case DELIVERY_TIME:
      return {
        ...state,
        delivery_time: action.payload,
      };
  }
};

export default filterReducerHook;
