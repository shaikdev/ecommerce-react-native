import {View, Text, ScrollView} from 'react-native';
import React from 'react';

interface ITabs {
  data?: any;
  callback?: Function;
}
const TabsComponent = (props: ITabs) => {
  const tabs = [
    'All',
    'Top',
    'Bottom',
    'Left',
    'Right',
    'All',
    'Top',
    'Bottom',
    'Left',
    'Right',
  ];
  return (
    <View className="w-full items-center">
      <ScrollView
        style={{width:'100%'}}
        contentContainerStyle={{paddingHorizontal: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="h-full w-full">
        <View className="flex-row space-x-4">
          {tabs.map((item: any, i: number) => {
            return (
              <View key={i}>
                <Text className="font-merriweather text-xs text-gray-text">
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TabsComponent;
