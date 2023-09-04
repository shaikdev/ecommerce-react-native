import {
  View,
  Text,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {
  Assets,
  CardComponent,
  CategoryComponent,
  Container,
  ImageComponent,
  LoaderComponent,
  LottieComponent,
  ScrollViewComponent,
  SearchComponent,
  SliderComponent,
  TabsComponent,
} from 'utils/import.utils';
import Models from 'imports/models.imports';
import {productEndPoints, useSetState} from 'utils/functions.utils';
import _ from 'lodash';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from 'helper/interface.helper';
import {tabList} from 'constant/constant';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  storeCurrentCategory,
  storeCurrentTab,
  storeProductDetails,
  storeSearchProduct,
} from 'utils/redux.utils';

const HomeScreen = (props: any) => {
  // redux
  const home = useSelector((state: any) => state.home);
  const product = useSelector((state: any) => state.product.productList);

  // react navigation
  const isFocused = useIsFocused();

  // state
  const [state, setState] = useSetState({
    userData: {},
    loading: false,
    productData: [],
    menuData: [],
    search: [],
    searchLoading: false,
  });

  // api call
  const getUser = async () => {
    try {
      setState({loading: true});
      const res: any = await Models.auth.getCurrentUser();
      setState({userData: res.data});
      setState({loading: false});
    } catch (err: any) {
      console.log('err', err);
      setState({loading: false});
    }
  };

  const getProduct = async (loading: boolean = true, data: any = []) => {
    try {
      setState({loading});
      const body: any = {};
      if (!_.isEmpty(data)) {
        body['search'] = data;
      }
      console.log('body', body);
      const res: any = await Models.product.getManyProduct(body);
      setState({productData: res.data, loading: false, searchLoading: false});
    } catch (err: any) {
      setState({loading: false, searchLoading: false});
      console.log('getProduct', err);
    }
  };

  const getMenu = async () => {
    try {
      setState({loading: true});
      let res: any = await Models.menu.getManyProduct();
      setState({menuData: res.data.docs, loading: false});
    } catch (err: any) {
      console.log('getMenu', err);
      setState({loading: false});
    }
  };

  const category = (value: string) => {
    if (home.category.includes(value)) storeCurrentCategory([]);
    else {
      storeCurrentCategory(value);
    }
    filterProducts(value, 'category');
  };

  const tab = (value: string) => {
    if (home.tab.includes(value)) storeCurrentTab([]);
    else {
      storeCurrentTab(value);
    }
    filterProducts(value, 'tab');
  };

  // logic
  const productDetails = (item: IProduct) => {
    storeProductDetails(item);
    props.navigation.navigate('itemDetails');
  };

  const filterProducts = async (value: any, type: string) => {
    const keys = home.search || [];
    const findIndex = _.findIndex(
      keys,
      (e: any) => e.value === value && e.type === type,
    );
    if (findIndex !== -1) {
      keys.splice(findIndex, 1);
      storeSearchProduct(keys);
    } else {
      const removePreviousValue = _.findIndex(
        keys,
        (e: any) => e.type === type,
      );
      if (removePreviousValue !== -1) {
        keys.splice(removePreviousValue, 1);
      }
      keys.push({
        type,
        value,
      });
      storeSearchProduct(keys);
    }
    setState({searchLoading: true});
    getProduct(false, keys);
  };

  useEffect(() => {
    if (isFocused) {
      getUser();
      getMenu();
      if (!_.isEmpty(home.search)) getProduct(undefined, home.search);
      else getProduct();
    }
  }, [isFocused]);

  return (
    <Container loading={state.loading} lottie={Assets.lottie_loading}>
      <ScrollViewComponent>
        <View className="pt-4 px-5 flex-row justify-between items-center">
          <View className="flex flex-col space-y-1">
            <Text className="font-raleway-semi-bold text-[24px] text-secondary-black">
              {state.userData && state.userData.name}
            </Text>
            <Text className="font-merriweather text-xs text-secondary-black">
              what would you buy today
            </Text>
          </View>
          <View>
            {state.userData && _.has(state.userData, 'profile') ? (
              <ImageComponent
                radius={36}
                src={state.userData.profile}
                width={36}
                height={36}
              />
            ) : (
              <ImageComponent
                radius={36}
                src={state.userData.avatar}
                width={36}
                height={36}
              />
            )}
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('search')}>
          <View className="mx-5 mt-5 flex justify-start flex-row items-center rounded-[10px] bg-input-background h-[56px]">
            <View className="mx-3">
              <ImageComponent width={24} height={24} src={Assets.search} svg />
            </View>
            <View className="flex-1">
              <Text className="text-sm text-gray-text font-merriweather">
                Search anything here
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View className="mt-5 w-full flex-row">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{paddingRight: 40}}
            style={{width: '100%', paddingHorizontal: 20}}>
            <CategoryComponent
              active={home.category}
              callback={(value: any) => {
                category(value);
              }}
              data={state.menuData}
              showName={true}
            />
          </ScrollView>
        </View>
        <View className="mt-5 w-full h-[160px] ">
          <SliderComponent />
        </View>
        <View className="mt-7 h-4">
          <TabsComponent
            active={home.tab}
            callback={(value: any) => tab(value)}
            data={tabList}
          />
        </View>
        {state.searchLoading ? (
          <View className="flex-1 items-center justify-center">
            <LoaderComponent color="#689C36" />
          </View>
        ) : (
          <View className="mt-5 mx-5 flex-row space-y-4 justify-between items-center flex-wrap flex-1">
            {state.productData &&
              state.productData.map((item: IProduct, index: number) => {
                return (
                  <View key={index} className="w-[166px] h-[172px]">
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => productDetails(item)}>
                      <CardComponent
                        index={index}
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
      </ScrollViewComponent>
    </Container>
  );
};

export default HomeScreen;
