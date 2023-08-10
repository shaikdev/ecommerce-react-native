import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

interface ITabs {
  data?: any;
  callback: Function;
  active: string;
}
const TabsComponent = (props: ITabs) => {
  const isActive = (value: any) => {
    if (props.active.includes(value)) return `text-primary-green`;
    else return `text-gray-text`;
  };
  return (
    <View className="w-full items-center">
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{paddingHorizontal: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="h-full w-full">
        <View className="flex-row space-x-4">
          {props.data &&
            props.data.map((item: any, i: number) => {
              return (
                <TouchableOpacity onPress={() => props.callback(item)} key={i}>
                  <Text
                    className={`font-merriweather text-xs ${isActive(item)}`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TabsComponent;
