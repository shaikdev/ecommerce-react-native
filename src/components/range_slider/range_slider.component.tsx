import {View, Text} from 'react-native';
import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';

interface IRangeSlider {
  onChange:Function,
  value:number
}
const RangeSliderComponent = (props:IRangeSlider) => {
  return (
    <View className="w-full h-full">
      <Slider
        thumbTintColor={'#689C36'}
        step={100}
        minimumValue={100}
        maximumValue={1000}
        minimumTrackTintColor={'#689C36'}
        value={props.value}
        onValueChange={value => props.onChange(value)}
      />
    </View>
  );
};

export default RangeSliderComponent;
