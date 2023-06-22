import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  Assets,
  COLORS,
  Container,
  Header,
  ImageComponent,
  ItemSliderComponent,
  QuantityButtonComponent,
  ScrollViewComponent,
  SecondaryButton,
  SliderComponent,
} from 'utils/import.utils';
import {height, width} from 'utils/functions.utils';

const ItemDetailsScreen = (props: any) => {
  const sampleData = [
    Assets.product_image,
    Assets.product_image,
    Assets.product_image,
    Assets.product_image,
  ];

  return (
    <Container statusBarColor={COLORS.itemDetailsStatusBarColor}>
      <ScrollViewComponent>
        <View className="h-[378px] relative">
          <View className="absolute w-full h-[280px] bg-light-green rounded-bl-[150px] rounded-br-[150px]">
            <View className="h-6 px-5 pt-4">
              <Header
                onClick={() => props.navigate.goBack()}
                icon={Assets.arrow_left}
                heartIcon={Assets.heart}
              />
            </View>
          </View>
          <View className="justify-center w-full items-center h-full mt-4">
            <ItemSliderComponent />
          </View>
        </View>
        <View className="px-5 mt-5 flex-row justify-start items-start space-x-3">
          <View className="w-[34px] h-[25px] justify-center items-center bg-primary-green rounded-br-xl">
            <Text className="font-merriweather text-xs text-offer-text-color">
              10%
            </Text>
          </View>
          <View>
            <Text className="font-raleway-bold text-secondary-black text-2xl">
              Orange
            </Text>
          </View>
        </View>
        <View className="mt-2 px-5">
          <Text className="font-merriweather text-sm text-gray-text">
            Farm Shop
          </Text>
          <View className="flex-row justify-between items-center mt-3">
            <View className="flex-row justify-start items-center space-x-2">
              <View>
                <Text className="font-raleway-semi-bold text-xl text-gray-text line-through">
                  $7.50
                </Text>
              </View>
              <View>
                <Text className="font-raleway-bold text-2xl text-primary-green">
                  $6.75
                </Text>
              </View>
            </View>
            <View className="w-[115px] h-9">
              <QuantityButtonComponent />
            </View>
          </View>
          <View className="mt-5">
            <Text className="font-raleway-semi-bold text-xl text-secondary-black">
              Descriptions
            </Text>
            <Text className="mt-2 font-merriweather text-xs text-secondary-black">
              The orange is the fruit of various citrus species in the family
              Rutaceae; it primarily refers to Citrus × sinensis, which is also
              called sweet orange, to distinguish it from the related Citrus ×
              aurantium, referred to as bitter orange. The orange is the fruit
              of various citrus species in the family Rutaceae; it primarily
              refers to Citrus × sinensis, which is also called sweet orange, to
            </Text>
          </View>
          <View className="flex-1 flex-row mt-10 justify-between items-end space-x-5">
            <View className="flex-1">
              <SecondaryButton text="Add To Cart" icon={Assets.cart_white} />
            </View>
            <View className="flex-1">
              <SecondaryButton text="Buy Now" />
            </View>
          </View>
        </View>
      </ScrollViewComponent>
    </Container>
  );
};

export default ItemDetailsScreen;
