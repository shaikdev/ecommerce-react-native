import axios from 'axios';
import * as Functions from 'utils/functions.utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const instance = () => {
  const data = axios.create({
    baseURL: `${Functions.getBaseURL()}/api/v1`,
  });
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data.interceptors.request.use(async function (config: any) {
    let accessToken:any = await AsyncStorage.getItem('token');
    accessToken = JSON.parse(accessToken)
    if (accessToken) config.headers['authorization'] = accessToken
    return config;
  });
  return data;
};

export default instance;
