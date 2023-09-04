import {
  TAB,
  CATEGORY,
  PRODUCT_DETAILS,
  FILTER_PRODUCT_LIST,
} from 'utils/types.utils';
import {storeAction} from 'helper/interface.helper';

const initialState = {
  productDetails: {},
  productList: [],
  filterProductList: [],
};

const ProductReducers = (state = initialState, action: storeAction) => {
  switch (action.type) {
    case PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
      };
    case FILTER_PRODUCT_LIST:
      return {
        ...state,
        filterProductList: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducers;
