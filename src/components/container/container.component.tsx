import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay';
import { LottieComponent } from 'utils/import.utils';

interface IContainer {
  loading?: boolean;
  statusBarColor?: any;
  children?: any;
  style?: any;
  content?: string;
  backgroundEmpty?: boolean;
  spinner?: boolean;
  lottie?: any;
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
        <View className="w-full h-full">
          <LottieComponent src={props.lottie} />
        </View>
      ) : (
        <View
          style={{ paddingTop: inset.top }}
          className={`h-full w-full bg-background ${props.style || ''}`}>
          {props.spinner && (
            <Spinner
              textStyle={{ color: '#191A19' }}
              textContent={props.content}
              visible={props.spinner}
            />
          )}
          {props.children}
        </View>
      )}
    </View>
  );
};

export default Container;
