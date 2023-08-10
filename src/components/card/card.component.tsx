import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';

interface ICard {
  thumbnail: string;
  offer_value: number;
  pice: number;
  productKg: string;
  productName: string;
  index: number;
}
const CardComponent = (props: ICard) => {
  return (
    <View
      key={props.index}
      className="w-full h-full bg-background rounded-xl shadow-xl"
      style={Platform.OS === 'android' ? styles.shadow : null}>
      <View className="rounded-tl-[10px] rounded-br-[10px] h-6 w-[34px] justify-center items-center bg-primary-green absolute z-10">
        <Text className="font-merriweather text-xs text-offer-text-color">
          {`${props.offer_value}%`}
        </Text>
      </View>
      <View className="mt-2 items-center">
        <ImageComponent resize='contain' width={156} height={80} src={props.thumbnail} />
      </View>
      <View className="px-2">
        <Text className="text-secondary-black font-merriweather text-base font-bold">
          {props.productName}
        </Text>
        <View className="flex-row justify-between items-start h-6">
          <View>
            <Text className="font-merriweather text-sm text-gray-text mt-1">
              {props.productKg}
            </Text>
          </View>
          <View className="w-9 h-9 mt-3 rounded-full items-center justify-center bg-primary-green">
            <ImageComponent width={24} height={24} svg src={Assets.cart} />
          </View>
        </View>
        <View className="flex-row items-center justify-start  space-x-1">
          <Text className="font-merriweather text-gray-text text-xs">
            $7.50
          </Text>
          <Text className="font-merriweather text-primary-green text-base font-bold">
            $6.75
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    // shadowOffset: {width: 10, height: 10},
    shadowColor: '#191A19',
    shadowOpacity: 1,
    elevation: 3,
  },
});

export default CardComponent;
