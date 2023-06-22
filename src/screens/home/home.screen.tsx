import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {
  Assets,
  CardComponent,
  CategoryComponent,
  Container,
  ImageComponent,
  ScrollViewComponent,
  SearchComponent,
  SliderComponent,
  TabsComponent,
} from 'utils/import.utils';

const HomeScreen = () => {
  const data = ['1', '2', '3', '4', '5', '6'];
  const cardRender = () => {
    return (
      <View className="w-[156px] h-[172px]">
        <CardComponent />
      </View>
    );
  };
  return (
    <Container>
      <ScrollViewComponent>
        <View className="pt-4 px-5 flex-row justify-between items-center">
          <View className="flex flex-col space-y-1">
            <Text className="font-raleway-semi-bold text-[24px] text-secondary-black">
              Hello Shaik
            </Text>
            <Text className="font-merriweather text-xs text-secondary-black">
              what would you buy today
            </Text>
          </View>
          <View>
            <ImageComponent src={Assets.profile_pic} width={36} height={36} />
          </View>
        </View>
        <View className="px-5 mt-5 h-[56px]">
          <SearchComponent
            placeHolderTextColor={'#ACADAC'}
            placeholder="Search anything here"
            icon={Assets.search}
          />
        </View>
        <View className="mt-5 w-full flex-row">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{paddingRight: 40}}
            style={{width: '100%', paddingHorizontal: 20}}>
            <CategoryComponent showName={true} />
          </ScrollView>
        </View>
        <View className="mt-5 w-full h-[160px] ">
          <SliderComponent />
        </View>
        <View className="mt-7 h-4">
          <TabsComponent />
        </View>
        <View className="mt-5 mx-5 flex-row space-y-4 justify-between items-center flex-wrap">
          {data.map((item: any, index: number) => {
            return (
              <View key={index} className="w-[166px] h-[172px]">
                <CardComponent />
              </View>
            );
          })}
        </View>
      </ScrollViewComponent>
    </Container>
  );
};

export default HomeScreen;
