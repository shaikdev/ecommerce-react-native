import {TAB, CATEGORY, PRODUCT_DETAILS} from 'utils/types.utils';
import {storeAction} from 'helper/interface.helper';

const initialState = {
  productDetails: {},
  productList: [],
};

const ProductReducers = (state = initialState, action: storeAction) => {
  switch (action.type) {
    case PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducers;
