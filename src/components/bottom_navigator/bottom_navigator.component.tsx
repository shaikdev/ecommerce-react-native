import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/home/home.screen';
import {Assets, COLORS, ImageComponent} from 'utils/import.utils';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.tabBackgroundColor,
          shadowColor: COLORS.shadowColor,
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          // height: Platform.OS === "android" ? 63 : "10%",
          // borderTopWidth: 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <ImageComponent
              svg
              src={focused ? Assets.home_active : Assets.home}
              width={24}
              height={24}
            />
          ),
        }}
        component={HomeScreen}></Tab.Screen>
      <Tab.Screen
        name="notification"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <ImageComponent
              svg
              src={Assets.notification}
              width={24}
              height={24}
            />
          ),
        }}
        component={HomeScreen}></Tab.Screen>
      <Tab.Screen
        name="message"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <ImageComponent svg src={Assets.message} width={24} height={24} />
          ),
        }}
        component={HomeScreen}></Tab.Screen>
      <Tab.Screen
        name="profile"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <ImageComponent svg src={Assets.profile} width={24} height={24} />
          ),
        }}
        component={HomeScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
