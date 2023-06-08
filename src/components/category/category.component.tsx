import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ImageComponent, Assets} from 'utils/import.utils';
import _ from 'lodash';

interface ICategory {
  data?: any;
}
const CategoryComponent = (props: ICategory) => {
  const image = [
    Assets.orange,
    Assets.orange,
    Assets.orange,
    Assets.orange,
    Assets.orange,
  ];
  return (
    <View className="flex-row space-x-6 items-center">
      {image.map((item: any) => {
        return (
          <View>
            <View className="w-[55px] h-[55px] items-center justify-center border-2 border-input-background rounded-lg">
              <ImageComponent src={Assets.orange} svg width={40} height={40} />
            </View>
            <Text className="text-xs text-center font-merriweather text-secondry-black mt-2">
              Fruit
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default CategoryComponent;
