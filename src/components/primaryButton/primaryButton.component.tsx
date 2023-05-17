import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface IPrimaryButton {
  text: string;
  onClick:Function;
  style?: any;
  buttonStyle?: any
}
const PrimaryButton = (props: IPrimaryButton) => {
  return (
    <TouchableOpacity onPress={props.onClick()}>
      <View
        className={`h-full w-full rounded-xl flex flex-row justify-center items-center bg-primary-green ${props.style}`}>
        <Text className={`font-merriweather text-sm text-button-color ${props.buttonStyle}`}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
