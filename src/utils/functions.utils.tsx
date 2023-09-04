import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Alert, Dimensions} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import _ from 'lodash';
export const getBaseURL = () => {
  let baseURL = 'http://192.168.1.26:8001';
  // let baseURL = 'https://ecommerce-server-6rrk.onrender.com';
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

export const endPoint = 'http://192.168.181.38:8001/api/v1';

export const Success = (message: string, description?: any) => {
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

export const Width = (value: number) => {
  return (value * width) / 100;
};

export const Height = (value: number) => {
  return (value * height) / 100;
};

export const isPrivateRoute = () => {
  let token = AsyncStorage.getItem('token');
  if (_.isEmpty(token)) return true;
};

export const productEndPoints = [
  `${getBaseURL()}/auth/get_current_user`,
  `${getBaseURL()}/product/get_many_product`,
];

export const statusBarHeight = getStatusBarHeight();
