import {useState} from 'react';
import {Dimensions} from 'react-native';
export const getBaseURL = () => {
  let baseURL = 'http://localhost:8001';
  // let baseURL = 'http://192.168.1.15:8001';
  // let baseURL = 'https://pleat-api.augmo.io';
  // let baseURL='https://api.pleat.co.in'
  if (process.env.REACT_APP_NODE_ENV === 'production') {
    baseURL = 'https://api.pleat.co.in';
  } else if (process.env.REACT_APP_NODE_ENV === 'stage') {
    baseURL = 'https://pleat-api.augmo.io';
  }
  return baseURL;
};

export const useSetState = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const newSetState = (newState: any) => {
    setState((prevState: any) => ({...prevState, ...newState}));
  };
  return [state, newSetState];
};

export const {width, height} = Dimensions.get('window');