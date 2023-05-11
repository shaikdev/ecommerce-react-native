import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Container, Assets, ImageComponent} from './utils/import.utils';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'screens/splash/splash.screen';
import Login from 'screens/login/login.screen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
