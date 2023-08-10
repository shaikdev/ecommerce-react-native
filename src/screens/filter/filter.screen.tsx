import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import {
  Assets,
  Container,
  FilterCategoryComponent,
  Header,
  ImageComponent,
  RangeSliderComponent,
  SecondaryButton,
} from 'utils/import.utils';
import {useSelector} from 'react-redux';
import filterReducerHook, {
  filterInitialState,
} from 'utils/hooks.reducer.utils.';
import {storeFilterData} from 'utils/redux.utils';
import {useIsFocused} from '@react-navigation/native';

const FilterScreen = (props: any) => {
  // redux
  const filter = useSelector((state: any) => state.filter.filter);
  const [isStore, setStore] = useState(false);
  const [isRefresh, setRefresh] = useState(true);

  // react navigation
  const isFocused = useIsFocused();
  // constant
  const rating = ['2 or higher', '3 or higher', '4 or higher', '5 star only'];
  const deliveryTime = ['> 60 min', '< 60 min', '40 - 50 min', '10 - 20 min'];

  // hooks
  const [state, dispatch] = useReducer(filterReducerHook, filterInitialState);

  useEffect(() => {
    dispatch({type: 'CATEGORY', payload: filter.category});
    dispatch({type: 'PRICE', payload: filter.price});
    dispatch({type: 'RATING', payload: filter.rating});
    dispatch({type:'DELIVERY_TIME',payload: filter.delivery_time});
  }, [isFocused]);

  useEffect(() => {
    if (isStore) storeFilterData(state);
  }, [isRefresh, isStore]);

  const updateState = (type: string, payload: string | number) => {
    dispatch({type, payload});
    setRefresh(!isRefresh);
    setStore(true);
  };

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
        <FilterCategoryComponent
          active={state.category}
          onChange={(value: string) => {
            updateState('CATEGORY', value);
          }}
        />
      </View>
      <View className="mt-6 px-5">
        <Text className="font-raleway-semi-bold text-xl text-secondary-black">
          Price
        </Text>
        <View className="flex-row justify-between items-center mt-3">
          <View className="h-[38px] w-[120px] border border-gray-text rounded-[10px] items-center justify-center">
            <Text>₹100</Text>
          </View>
          <View className="flex-1 items-center justify-center">
            <Text>to</Text>
          </View>
          <View className="h-[38px] w-[120px] border border-gray-text rounded-[10px] items-center justify-center">
            <Text>₹ {state.price}</Text>
          </View>
        </View>
      </View>
      <View className="mt-3 px-5 h-5">
        <RangeSliderComponent
          value={state.price}
          onChange={(value: number) => {
            updateState('PRICE', value);
          }}
        />
      </View>
      <View className="mt-8 px-5">
        <Text className="font-raleway-semi-bold text-xl text-secondary-black">
          Rating
        </Text>
        <View className="mt-2 flex-row justify-start gap-x-4 space-y-4 items-center flex-wrap">
          {rating.map((item: any, index: number) => {
            return (
              <TouchableOpacity onPress={() => updateState('RATING', item)}>
                <View
                  key={index}
                  className={`flex-row justify-start space-x-2 items-center  px-3 h-8 rounded-lg ${
                    state.rating === item
                      ? 'bg-primary-green'
                      : 'border border-gray-text'
                  }`}>
                  <View>
                    <ImageComponent
                      src={Assets.star}
                      width={18}
                      height={18}
                      svg
                    />
                  </View>
                  <View>
                    <Text
                      className={`font-merriweather text-sm ${
                        state.rating === item
                          ? 'text-button-color'
                          : 'text-filter-category-text-color'
                      } `}>
                      {item}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => updateState('DELIVERY_TIME', item)}>
                <View
                  key={index}
                  className={`justify-center items-center  px-3 h-8 rounded-lg ${
                    state.delivery_time === item
                      ? 'bg-primary-green'
                      : 'border border-gray-text'
                  }`}>
                  <View>
                    <Text
                      className={`font-merriweather text-sm ${
                        state.delivery_time === item
                          ? 'text-button-color'
                          : 'text-filter-category-text-color'
                      } `}>
                      {item}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
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
