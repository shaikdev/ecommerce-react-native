import React from 'react';
import {View, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IContainer {
  loading?: boolean;
  statusBarColor?: any;
  children?: any;
  style?: any;
}
const Container = (props: IContainer) => {
  const inset = useSafeAreaInsets();
  return (
    <View>
      <StatusBar
        backgroundColor={props.statusBarColor || 'transparent'}
        translucent={true}
        hidden={false}
        barStyle={'dark-content'}
      />
      {props.loading ? (
        <View></View>
      ) : (
        <View
          style={{paddingTop: inset.top}}
          className={`h-full w-full bg-background ${props.style || ''}`}>
          {props.children}
        </View>
      )}
    </View>
  );
};

export default Container;
