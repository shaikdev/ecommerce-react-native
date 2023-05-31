import {View, Text} from 'react-native';
import React from 'react';
import {
  Assets,
  CategoryComponent,
  Container,
  ImageComponent,
  SearchComponent,
} from 'utils/import.utils';

const HomeScreen = () => {
  return (
    <Container>
      <View className="pt-4 px-5 flex flex-row justify-between items-center">
        <View className="flex flex-col space-y-1">
          <Text className="font-raleway-semi-bold text-[24px] text-secondry-black">
            Hello Shaik
          </Text>
          <Text className="font-merriweather text-xs text-secondry-black">
            what would you buy today
          </Text>
        </View>
        <View>
          <ImageComponent src={Assets.profile_pic} width={36} height={36} />
        </View>
      </View>
      <View className="px-5 mt-5 h-[56px]">
        <SearchComponent
          placeholder="Search anything here"
          icon={Assets.search}
        />
      </View>
      <View className='px-5 mt-5'>
      <CategoryComponent/>
      </View>
    </Container>
  );
};

export default HomeScreen;
