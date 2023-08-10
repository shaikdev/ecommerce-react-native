import {FILTER_LIST} from 'utils/types.utils';
import {storeAction} from 'helper/interface.helper';

const initialState = {
  filter:{ }
};

const FilterReducer = (state = initialState, action: storeAction) => {
  switch (action.type) {
    case FILTER_LIST:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default FilterReducer;
