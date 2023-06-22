import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const FilterCategoryComponent = () => {
  const data = ['All', 'Vegetables', 'Fruits', 'Egg & Meals'];
  return (
    <View className="w-full h-full">
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="w-full h-full">
        <View className="flex-row justify-start items-center space-x-3">
          {data.map((item: any, index: number) => {
            return (
              <View
                key={index}
                className="h-8 px-4 border rounded-lg border-gray-text items-center justify-center">
                <Text className="font-merriweather text-sm text-filter-category-text-color">
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterCategoryComponent;
