import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';
import _ from 'lodash';

interface IQuantity {
  callback: Function;
  value: number;
}
const QuantityButtonComponent = (props: IQuantity) => {
  const quantity = (value: string) => {
    switch (value) {
      case 'ADD':
        props.callback(props.value + 1);
        break;
      case 'MINUS':
        let kg = props.value;
        if (kg === 1) {
          props.callback(1);
        } else {
          let kg = props.value - 1;
          props.callback(kg);
        }
        break;
      default:
        props.callback(props.value);
    }
  };

  return (
    <View className="w-full h-full bg-input-background flex-row justify-between items-center p-[2px] rounded-lg">
      <View className="w-[32px] h-[32px] justify-center items-center rounded-lg bg-quantity-button-background ">
        <TouchableOpacity onPress={() => quantity('MINUS')}>
          <ImageComponent svg src={Assets.minus} width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="font-merriweather text-sm text-secondary-black">
          {`${props.value} Kg`}
        </Text>
      </View>
      <View className="w-[32px] h-[32px] justify-center items-center rounded-lg bg-primary-green">
        <TouchableOpacity onPress={() => quantity('ADD')}>
          <ImageComponent svg src={Assets.plus} width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuantityButtonComponent;
