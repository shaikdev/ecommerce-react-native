import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageComponent, Assets} from 'utils/import.utils';
import _ from 'lodash';

interface ICategory {
  data?: any;
  showName: boolean;
  callback?: Function;
  active?: any;
}
const CategoryComponent = (props: ICategory) => {
  const isActive = (item: any) => {
    if (props.active?.includes(item.name)) return 'border-primary-green scale-1';
    else return 'border-input-background ';
  };
  return (
    <View className="flex-row space-x-5 items-center">
      {props.data &&
        props.data.map((item: any, i: number) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() =>
                props.callback ? props.callback(item.name) : null
              }>
              <View
                className={`w-[55px] h-[55px] items-center justify-center border-2 rounded-lg ${isActive(
                  item,
                )}`}>
                <ImageComponent
                  resize="cover"
                  radius={8}
                  src={item.image}
                  width={44}
                  height={44}
                />
              </View>
              {props.showName && (
                <Text
                  className={`text-xs text-center font-merriweather mt-2 ${
                    props.active && props.active.includes(item.name)
                      ? 'text-primary-green'
                      : 'text-secondary-black'
                  } `}>
                  {item.name}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default CategoryComponent;
