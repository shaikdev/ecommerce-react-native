import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import _ from 'lodash';

interface IFilterCategory {
  onChange: Function;
  data?: any;
  active: string;
}

const FilterCategoryComponent = (props: IFilterCategory) => {
  const data = ['All', 'Vegetables', 'Fruits', 'Egg & Meals'];
  const handleCategory = (item: string) => {
    if (_.isEqual(props.active, item)) props.onChange('');
    else props.onChange(item);
  };
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
              <TouchableOpacity
                key={index}
                onPress={() => handleCategory(item)}>
                <View
                  className={`h-8 px-4  rounded-lg  items-center justify-center ${
                    props.active === item
                      ? 'bg-primary-green'
                      : 'border-gray-text border'
                  }`}>
                  <Text
                    className={`font-merriweather text-sm ${
                      props.active === item
                        ? 'text-button-color'
                        : 'text-filter-category-text-color'
                    }`}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterCategoryComponent;
