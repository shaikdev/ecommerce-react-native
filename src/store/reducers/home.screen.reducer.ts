import {TAB, CATEGORY, SEARCH_LIST} from 'utils/types.utils';
import {storeAction} from 'helper/interface.helper';

const initialState = {
  tab: [],
  category: [],
  search: [],
};

const HomeScreenReducers = (state = initialState, action: storeAction) => {
  switch (action.type) {
    case TAB:
      return {
        ...state,
        tab: [action.payload],
      };
    case CATEGORY:
      return {
        ...state,
        category: [action.payload],
      };
    case SEARCH_LIST:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default HomeScreenReducers;
