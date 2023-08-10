import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';

interface ILoader {
  color: string;
}
const LoaderComponent = (props: ILoader) => {
  return (
    <View>
      <ActivityIndicator  size={'large'} color={props.color} />
    </View>
  );
};

export default LoaderComponent;
