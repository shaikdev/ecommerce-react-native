import {View, Text} from 'react-native';
import React from 'react';
import {
  Assets,
  CategoryComponent,
  Container,
  ImageComponent,
  SearchHeaderComponent,
} from 'utils/import.utils';

const SearchScreen = (props: any) => {
  return (
    <Container>
      <View className="px-5 h-[60px] w-full mt-4">
        <SearchHeaderComponent
          onClick={() => props.navigation.goBack()}
          placeholder="Search"
          filter_icon={Assets.filter_icon}
          icon={Assets.arrow_left}
        />
      </View>
      <View className="mt-6 px-5">
        <Text className="font-raleway-semi-bold text-xl text-secondary-black">
          Last Seen
        </Text>
        <View className="mt-3">
          <CategoryComponent showName={false} />
        </View>
        <View className="mt-6">
          <Text className="font-raleway-semi-bold text-xl text-secondary-black">
            Last Search
          </Text>
          <View className="mt-5 space-y-2">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="font-merriweather text-xs text-gray-text">
                  Orange
                </Text>
              </View>
              <View>
                <ImageComponent src={Assets.close} width={24} height={24} svg />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SearchScreen;
