import {View, Text} from 'react-native';
import React from 'react';
import {ImageComponent, Assets} from 'utils/import.utils';

const CategoryComponent = () => {
  return (
    <View className="flex flex-row items-center justify-start space-x-2">
      <View className="w-[50px] h-[69px] flex items-center justify-center border-2 border-input-background">
        <ImageComponent src={Assets.orange} svg width={40} height={40} />
      </View>
      <Text className="text-sm font-merriweather text-secondry-black mt-1"></Text>
    </View>
  );
};

export default CategoryComponent;
