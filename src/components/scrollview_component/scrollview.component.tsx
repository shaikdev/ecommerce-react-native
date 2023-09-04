import {View, Text, ScrollViewBase, ScrollView} from 'react-native';
import React from 'react';

interface IScrollview {
  children: any;
  paddingBottom?: number;
}
const ScrollViewComponent = (props: IScrollview) => {
  return (
    <View className="w-full h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: props.paddingBottom || 30,
          flexGrow: 1,
        }}
        className="h-full">
        {props.children}
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;
