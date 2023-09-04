import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageComponent} from 'utils/import.utils';

interface IHeader {
  text?: string;
  onClick: Function;
  icon: any;
  heartIcon?: any;
}
const Header = (props: IHeader) => {
  return (
    <View className="w-full h-full">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => props.onClick()}>
          <ImageComponent svg src={props.icon} width={24} height={24} />
        </TouchableOpacity>
        {props.text && (
          <View className="flex-1 justify-center items-center">
            <Text className="text-xl font-raleway-semi-bold text-secondary-black">
              {props.text}
            </Text>
          </View>
        )}
        {props.heartIcon && (
          <TouchableOpacity onPress={() => props.onClick()}>
            <ImageComponent svg src={props.heartIcon} width={24} height={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
