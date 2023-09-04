import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Assets,
  CardComponent,
  CategoryComponent,
  CategorySearchComponent,
  Container,
  ImageComponent,
  LoaderComponent,
  SearchHeaderComponent,
} from 'utils/import.utils';
import Models from 'imports/models.imports';
import _ from 'lodash';
import {IProduct} from 'helper/interface.helper';
import {storeProductDetails} from 'utils/redux.utils';
import {useIsFocused} from '@react-navigation/native';

const SearchScreen = (props: any) => {
  // state
  const [isSearch, setSearch] = useState('');
  const [isProduct, setProduct] = useState([]);
  const [isSearchData, setSearchData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // react navigation
  const isFocused = useIsFocused();

  // api calls
  const getProductBySearch = async (search: string) => {
    try {
      setLoading(true);
      const res: any = await Models.product.getManyProduct({
        searchByKey: search,
      });
      setProduct(res.data);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      console.log('err', err);
    }
  };

  const createSearch = async (data: IProduct) => {
    try {
      const body = {
        product: data._id,
      };
      await Models.search.createSearch(body);
    } catch (err: any) {
      console.log('err', err);
    }
  };

  const getSearchData = async () => {
    try {
      const res: any = await Models.search.getManySearch();
      let modifyData: any = _.orderBy(res.data, ['updated_at'], ['desc']);
      modifyData = _.map(modifyData, (e: any) => e.product);
      setSearchData(modifyData);
    } catch (err: any) {
      console.log('err', err);
    }
  };

  const deleteSearch = async (item: IProduct) => {
    try {
      const body = {
        product: item._id,
      };
      await Models.search.editSearch(body);
      getSearchData()
    } catch (err: any) {
      console.log('err', err);
    }
  };

  // logic
  const productDetails = async (item: IProduct) => {
    createSearch(item);
    storeProductDetails(item);
    setSearch('');
    props.navigation.navigate('itemDetails');
  };

  const navigateProduct = (item: IProduct) => {
    createSearch(item);
    storeProductDetails(item);
    props.navigation.navigate('itemDetails');
  };

  useEffect(() => {
    if (isFocused) {
      getSearchData();
    }
  }, [isSearch, isFocused]);

  return (
    <Container>
      <View className="px-5 h-[60px] w-full mt-4">
        <SearchHeaderComponent
          value={isSearch}
          onChange={(value: string) => {
            setSearch(value);
            getProductBySearch(value);
          }}
          onFilterScreen={() => props.navigation.navigate('filter')}
          onClick={() => props.navigation.goBack()}
          placeholder="Search"
          filter_icon={Assets.filter_icon}
          icon={Assets.arrow_left}
        />
      </View>
      <View className="mt-6">
        <Text className="font-raleway-semi-bold text-xl text-secondary-black px-4">
          {isSearch.length > 0 ? (
            <>Result for : {isSearch}</>
          ) : (
            <> {!_.isEmpty(isSearchData) && <>Last Seen</>}</>
          )}
        </Text>
        {isSearch.length > 0 ? (
          <>
            {isLoading ? (
              <View className="items-center justify-center h-[75%]">
                <LoaderComponent color="#689C36" />
              </View>
            ) : (
              <>
                {_.isEmpty(isProduct) ? (
                  <View className="justify-center h-[75%] items-center px-5">
                    <Text className="font-merriweather font-bold text-xl text-gray-text">
                      No Data
                    </Text>
                  </View>
                ) : (
                  <View className="mt-5 flex-row space-y-4 justify-between items-center flex-wrap flex-1 px-5">
                    {isProduct &&
                      isProduct.map((item: IProduct, index: number) => {
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
              </>
            )}
          </>
        ) : (
          <>
            {!_.isEmpty(isSearchData) && (
              <View>
                <View className="mt-3">
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={{paddingRight: 0}}
                    style={{width: '100%', paddingHorizontal: 20}}>
                    <CategorySearchComponent
                      onPress={(item: IProduct) => navigateProduct(item)}
                      data={isSearchData}
                    />
                  </ScrollView>
                </View>
              </View>
            )}
            {!_.isEmpty(isSearchData) && (
              <View className="mt-6 px-5">
                <Text className="font-raleway-semi-bold text-xl text-secondary-black">
                  Last Search
                </Text>
                <View className="mt-5 space-y-3">
                  {isSearchData &&
                    isSearchData.map((search: IProduct, index: number) => {
                      return (
                        <View
                          key={index}
                          className="flex-row justify-between items-start">
                          <View>
                            <Text className="font-merriweather text-sm text-gray-text">
                              {search.name}
                            </Text>
                          </View>
                          <View>
                            <TouchableOpacity
                              onPress={() => deleteSearch(search)}>
                              <ImageComponent
                                src={Assets.close}
                                width={24}
                                height={24}
                                svg
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    })}
                </View>
              </View>
            )}
          </>
        )}
      </View>
    </Container>
  );
};

export default SearchScreen;
