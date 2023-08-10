import store from 'store/store';
import {
  TAB,
  CATEGORY,
  PRODUCT_DETAILS,
  SEARCH_LIST,
  FILTER_LIST,
} from './types.utils';

export const storeCurrentTab = (payload: any) =>
  store.dispatch({
    type: TAB,
    payload,
  });

export const storeCurrentCategory = (payload: any) => {
  store.dispatch({
    type: CATEGORY,
    payload,
  });
};

export const storeProductDetails = (payload: object) => {
  store.dispatch({
    type: PRODUCT_DETAILS,
    payload,
  });
};

export const storeSearchProduct = (payload: any) => {
  store.dispatch({
    type: SEARCH_LIST,
    payload,
  });
};

export const storeFilterData = (payload: any) => {
  store.dispatch({
    type: FILTER_LIST,
    payload,
  });
};
