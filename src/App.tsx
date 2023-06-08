import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Container, Assets, ImageComponent} from './utils/import.utils';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'screens/splash/splash.screen';
import Login from 'screens/login/login.screen';
import Register from 'screens/register/register.screen';
import ResetPassword from 'screens/reset_password/reset_password.screen';
import ForgotPasswordScreen from 'screens/forget_password/forget_password.screen';
import HomeScreen from 'screens/home/home.screen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="resetpassword" component={ResetPassword} />
        <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen} /> */}
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
