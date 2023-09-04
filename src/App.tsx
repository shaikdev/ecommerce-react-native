import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  Container,
  Assets,
  ImageComponent,
  BottomNavigator,
  Functions,
} from './utils/import.utils';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'screens/splash/splash.screen';
import Login from 'screens/login/login.screen';
import Register from 'screens/register/register.screen';
import ResetPassword from 'screens/reset_password/reset_password.screen';
import ForgotPasswordScreen from 'screens/forget_password/forget_password.screen';
import HomeScreen from 'screens/home/home.screen';
import ItemDetailsScreen from 'screens/item_details/item.details.screen';
import SearchScreen from 'screens/search_screen/search.screen';
import FilterScreen from 'screens/filter/filter.screen';
import WishlistScreen from 'screens/wishlist/wishlist.screen';
import {Provider} from 'react-redux';
import store from 'store/store';
import FilterProduct from 'screens/ffilter_product/filter_product.screen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="resetpassword" component={ResetPassword} />
          <Stack.Screen
            name="forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="tabNavigator" component={BottomNavigator} />
          <Stack.Screen name="itemDetails" component={ItemDetailsScreen} />
          <Stack.Screen name="search" component={SearchScreen} />
          <Stack.Screen name="wishlist" component={WishlistScreen} />
          <Stack.Screen name="filter" component={FilterScreen} />
          <Stack.Screen name="filterProduct" component={FilterProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
