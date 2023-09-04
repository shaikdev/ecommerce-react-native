import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Assets, Container, Functions, ImageComponent} from 'utils/import.utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import { onGoogleSignout } from 'utils/google.auth';

const SplashScreen = (props: any) => {
  useEffect(() => {
    setTimeout(async () => {
      let isAlreadyLoggedIn: any = await AsyncStorage.getItem('token');
      if (isAlreadyLoggedIn) {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'tabNavigator'}],
        });
      } else {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'login'}],
        });
      }
    }, 2000);
  },[]);
  return (
    <Container>
      <View className="flex justify-center items-center h-full">
        <ImageComponent width={169} svg height={179} src={Assets.logo} />
      </View>
    </Container>
  );
};

export default SplashScreen;
