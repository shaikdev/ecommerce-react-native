/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {SafeAreaProvider} from "react-native-safe-area-context";
import 'react-native-gesture-handler';
const Index = () => {
  return (
    <>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => Index);
