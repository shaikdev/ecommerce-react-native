import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Assets, Container, ImageComponent} from 'utils/import.utils';

const SplashScreen = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.reset({
        index: 0,
        routes: [{name: 'login'}],
      });
    }, 2000);
  });
  return (
    <Container>
      <View className="flex justify-center items-center h-full">
        <ImageComponent width={169} height={179} src={Assets.logo} />
      </View>
    </Container>
  );
};

export default SplashScreen;
