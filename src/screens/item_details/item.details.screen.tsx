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
import {height, useSetState, width} from 'utils/functions.utils';
import {useSelector} from 'react-redux';

const ItemDetailsScreen = (props: any) => {
  // redux
  const product = useSelector((state: any) => state.product);

  // state
  const [state, setState] = useSetState({
    quantityNumber: 1,
    quantityLimit: product.productDetails.quantity,
  });

  return (
    <Container statusBarColor={COLORS.itemDetailsStatusBarColor}>
      <ScrollViewComponent>
        <View className="h-[378px] relative">
          <View className="h-6 px-5 pt-4 z-50">
            <Header
              onClick={() => props.navigation.goBack()}
              icon={Assets.arrow_left}
              heartIcon={Assets.heart}
            />
          </View>
          <View className="absolute w-full h-[280px] bg-light-green rounded-bl-[150px] rounded-br-[150px]"></View>
          <View className="justify-center w-full items-center h-full mt-4">
            <ItemSliderComponent data={product.productDetails.product_image} />
          </View>
        </View>
        <View className="px-5 mt-8 flex-row justify-start items-start space-x-3">
          <View className="w-[34px] h-[25px] justify-center items-center bg-primary-green rounded-br-xl">
            <Text className="font-merriweather text-xs text-offer-text-color">
              {`${product.productDetails.offer_value}%`}
            </Text>
          </View>
          <View>
            <Text className="font-raleway-bold text-secondary-black text-2xl">
              {product.productDetails.name}
            </Text>
          </View>
        </View>
        <View className="mt-2 px-5">
          <Text className="font-merriweather text-sm text-gray-text">
            {product.productDetails.shop_name}
          </Text>
          <View className="flex-row justify-between items-center mt-3">
            <View className="flex-row justify-start items-center space-x-2">
              <View>
                <Text className="font-raleway-semi-bold text-xl text-gray-text line-through">
                  {product.productDetails.price}
                </Text>
              </View>
              <View>
                <Text className="font-raleway-bold text-2xl text-primary-green">
                  $6.75
                </Text>
              </View>
            </View>
            <View className="w-[115px] h-9">
              <QuantityButtonComponent callback={(quantityNumber:number)=>setState({quantityNumber})} value={state.quantityNumber} />
            </View>
          </View>
          <View className="mt-5">
            <Text className="font-raleway-semi-bold text-xl text-secondary-black">
              Descriptions
            </Text>
            <Text className="mt-2 font-merriweather text-xs text-secondary-black">
              {product.productDetails.description}
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
