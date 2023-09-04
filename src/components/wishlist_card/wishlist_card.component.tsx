import { View, Text } from 'react-native';
import React from 'react';
import { Assets, ImageComponent } from 'utils/import.utils';

interface IWishListCard {
  icon:any
}
const WishlistCardComponent = (props:IWishListCard) => {
  return (
    <View className="w-full h-full rounded-[10px] bg-background shadow-md p-3.5">
      <View className="flex-row justify-between items-start">
        <View className="flex-row justify-start items-center space-x-3">
          <View>
            <ImageComponent
              src={props.icon}
              svg
              width={80}
              height={80}
            />
          </View>
          <View className='flex-col justify-center items-start'>
            <Text className='font-merriweather font-bold text-[16px] text-secondary-black'>
              Brocoli
            </Text>
            <Text className='font-merriweather text-xs text-secondary-black mt-2'>
              1 Kg
            </Text>
            <View className='flex-row justify-start items-center space-x-1 mt-2'>
              <View>
                <Text className='font-merriweather text-xs text-gray-text line-through'>
                  $6.00
                </Text>
              </View>
              <View>
                <Text className='font-merriweather text-[16px] text-primary-green'>
                  $5.40
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className='mt-[2px]'>
          <ImageComponent src={Assets.heart_active} svg width={24} height={24} />
        </View>
      </View>
      <View className='flex-row justify-between items-end'>
        <View>
          <Text className='font-merriweather text-[11px] text-filter-category-text-color'>
            Remove swipe right to left
          </Text>
        </View>
        <View className='justify-center items-center w-9 h-9 bg-primary-green rounded-3xl'>
          <ImageComponent src={Assets.cart} svg width={24} height={24} />
        </View>
      </View>
    </View>
  );
};

export default WishlistCardComponent;
