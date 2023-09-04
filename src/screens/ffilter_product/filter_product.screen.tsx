import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  Container,
  Assets,
  ImageComponent,
  CardComponent,
} from 'utils/import.utils';
import {useSetState} from 'utils/functions.utils';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import {IProduct} from 'helper/interface.helper';
import {storeProductDetails} from 'utils/redux.utils';

const FilterProduct = (props: any) => {
  // redux
  const filter = useSelector((state: any) => state.filter.filter);
  const product = useSelector((state: any) => state.product.filterProductList);

  // hooks
  useEffect(() => {}, []);

  const productDetails = (item: IProduct) => {
    storeProductDetails(item);
    props.navigation.navigate('itemDetails');
  };

  return (
    <Container>
      <View className="mt-4 px-5 flex-row justify-between items-center">
        <View className="w-[24px] h-[24px]">
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <ImageComponent
              width={24}
              svg
              height={24}
              src={Assets.arrow_left}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-raleway-semi-bold text-xl text-secondary-black">
            Category : {filter.category}
          </Text>
        </View>
        <View></View>
      </View>

      {_.isEmpty(product) ? (
        <View className="flex-1 items-center justify-center"></View>
      ) : (
        <View className="flex-row justify-between items-center flex-wrap space-y-5  mx-5 mt-10">
          {product &&
            product.map((item: IProduct, i: number) => {
              return (
                <View key={i} className="w-[166px] h-[172px]">
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => productDetails(item)}>
                    <CardComponent
                      index={i}
                      productKg={item.product_kg}
                      pice={item.price}
                      offer_value={item.offer_value}
                      thumbnail={item.cover_photo}
                      productName={item.name}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      )}
    </Container>
  );
};

export default FilterProduct;
