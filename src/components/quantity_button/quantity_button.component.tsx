import {View, Text} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';

const QuantityButtonComponent = () => {
  return (
    <View className="w-full h-full bg-input-background flex-row justify-between items-center p-[2px] rounded-lg">
      <View className="w-[32px] h-[32px] justify-center items-center rounded-lg bg-quantity-button-background ">
        <ImageComponent svg src={Assets.minus} width={24} height={24} />
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="font-merriweather text-sm text-secondary-black">
          1 Kg
        </Text>
      </View>
      <View className="w-[32px] h-[32px] justify-center items-center rounded-lg bg-primary-green">
        <ImageComponent svg src={Assets.plus} width={24} height={24} />
      </View>
    </View>
  );
};

export default QuantityButtonComponent;
