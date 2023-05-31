import {useState} from 'react';
import {Dimensions} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import { getStatusBarHeight } from 'react-native-status-bar-height';
export const getBaseURL = () => {
  let baseURL = 'http://192.168.1.23:8001';
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

export const Sucess = (message: string, description?: any) => {
  showMessage({
    message: message,
    description: description,
    type: 'success',
    icon: 'success',
    autoHide: true,
    position: 'top',
  });
};

export const Failure = (message: string, description?: string) => {
  showMessage({
    message: message,
    description: description,
    type: 'danger',
    icon: 'danger',
    autoHide: true,
    position: 'top',
  });
};

export const statusBarHeight = getStatusBarHeight();


