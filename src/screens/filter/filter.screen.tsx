import {View, Text} from 'react-native';
import React from 'react';
import {
  Assets,
  Container,
  FilterCategoryComponent,
  Header,
  ImageComponent,
  RangeSliderComponent,
  SecondaryButton,
} from 'utils/import.utils';

const FilterScreen = (props: any) => {
  const rating = ['2 or higher', '3 or higher', '4 or higher', '5 star only'];
  const deliveryTime = ['> 60 min', '< 60 min', '40 - 50 min', '10 - 20 min'];
  return (
    <Container>
      <View className="px-5 mt-4 h-[30px]">
        <Header
          text="Filter"
          icon={Assets.arrow_left}
          onClick={() => props.navigation.goBack()}
        />
      </View>
      <Text className="font-raleway-semi-bold text-xl text-secondary-black px-5 mt-7">
        Categories
      </Text>
      <View className="h-8 mt-3">
        <FilterCategoryComponent />
      </View>
      <View className="mt-6 px-5">
        <Text className="font-raleway-semi-bold text-xl text-secondary-black">
          Price
        </Text>
        <View className="flex-row justify-between items-center mt-3">
          <View className="h-[38px] w-[120px] border border-gray-text rounded-[10px] items-center justify-center">
            <Text> $ 5.00</Text>
          </View>
          <View className="flex-1 items-center justify-center">
            <Text>to</Text>
          </View>
          <View className="h-[38px] w-[120px] border border-gray-text rounded-[10px] items-center justify-center">
            <Text> $ 5.00</Text>
          </View>
        </View>
      </View>
      <View className="mt-3 px-5 h-5">
        <RangeSliderComponent />
      </View>
      <View className="mt-8 px-5">
        <Text className="font-raleway-semi-bold text-xl text-secondary-black">
          Rating
        </Text>
        <View className="mt-2 flex-row justify-start gap-x-4 space-y-4 items-center flex-wrap">
          {rating.map((item: any, index: number) => {
            return (
              <View
                key={index}
                className="flex-row justify-start space-x-2 items-center border border-gray-text px-3 h-8 rounded-lg">
                <View>
                  <ImageComponent
                    src={Assets.star}
                    width={18}
                    height={18}
                    svg
                  />
                </View>
                <View>
                  <Text className="font-merriweather text-sm text-filter-category-text-color">
                    {item}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View className="mt-5 px-5">
        <Text className="font-raleway-semi-bold text-xl text-secondary-black">
          Delivery Time
        </Text>
        <View className="mt-2 flex-row justify-start gap-x-4 space-y-4 items-center flex-wrap">
          {deliveryTime.map((item: any, index: number) => {
            return (
              <View
                key={index}
                className=" justify-center items-center border border-gray-text px-3 h-8 rounded-lg">
                <View>
                  <Text className="font-merriweather text-sm text-filter-category-text-color">
                    {item}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View className="flex-row flex-1 space-x-4 justify-between items-end mb-10 px-5">
        <View className="flex-1 border border-primary-green h-10 justify-center items-center rounded-[10px]">
          <Text className="font-merriweather font-bold text-sm text-primary-green">
            Cancel
          </Text>
        </View>
        <View className="flex-1">
          <SecondaryButton text="Show Results" />
        </View>
      </View>
    </Container>
  );
};

export default FilterScreen;
