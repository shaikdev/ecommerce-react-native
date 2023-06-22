import {View, Text} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';

interface ISecondaryButton {
  icon?: any;
  text: string;
}
const SecondaryButton = (props: ISecondaryButton) => {
  return (
    <View
      className={`w-full h-10 flex-row justify-center items-center rounded-[10px] ${
        props.icon
          ? 'space-x-3 border border-primary-green'
          : 'bg-primary-green'
      }`}>
      {props.icon && (
        <View>
          <ImageComponent svg width={18} height={18} src={props.icon} />
        </View>
      )}
      <View>
        <Text
          className={`font-merriweather text-sm font-bold ${
            !props.icon ? 'text-button-color' : 'text-primary-green'
          }`}>
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default SecondaryButton;
