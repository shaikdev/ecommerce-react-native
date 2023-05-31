/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { Functions } from 'utils/import.utils';
import 'react-native-gesture-handler';
const Index = () => {
  return (
    <>
      <SafeAreaProvider>
        <App />
        <FlashMessage
          position={
            Platform.OS === 'ios' ? 'top' : {top: 50, left: 0, right: 0}
          }
          statusBarHeight={Functions.statusBarHeight}
          floating={Platform.OS !== 'ios'}
        />
      </SafeAreaProvider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => Index);
