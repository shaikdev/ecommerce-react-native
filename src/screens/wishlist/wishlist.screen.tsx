import { View, Text, FlatList, TouchableHighlight, Dimensions, Animated, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Assets,
  Container,
  Header,
  ImageComponent,
  ScrollViewComponent,
  WishlistCardComponent,
} from 'utils/import.utils';
import { SwipeListView } from 'react-native-swipe-list-view';
import { boolean } from 'zod';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WishlistScreen = (props: any) => {
  // state
  const [animationRunning, setAnimationRunning] = useState(false)
  const [isData, setData] = useState([1, 2, 3, 4, 5, 6])
  const rowTranslateAnimatedValues: any = {};
  const renderItem = (data: any, rowMap: any) => {
    return (
      <Animated.View>
        <TouchableHighlight>
          <View className='w-full h-[144px] mb-4'>
            <WishlistCardComponent icon={Assets.orange} />
          </View>
        </TouchableHighlight>
      </Animated.View>
    )

  }
  const renderHiddenItem = (data: any, rowMap: any) => {
    return (
      <View className='items-center bg-error rounded-[10px] h-[144px] flex-row justify-end'>
        <TouchableOpacity onPress={() => deleteRow(rowMap, data)}>
          <View className='w-[24px] mr-10'>
            <ImageComponent svg src={Assets.trash} width={26} height={26} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const deleteRow = (rowMap: any, data: any) => {
    let items = isData
    items = items.filter((item: any) => item !== data.item)
    setData(items)

  }

  // hooks
  useEffect(() => {

  }, [])


  return (
    <Container>
      <View className="px-5 mt-4 h-6">
        <Header
          icon={Assets.arrow_left}
          onClick={() => props.navigation.goBack()}
          text="My Wishlist"
        />
      </View>
      <View className='mt-5 flex-1'>
        <ScrollViewComponent paddingBottom={100}>
          <View className="">
            <SwipeListView
              previewRowKey={'0'}
              disableRightSwipe
              previewOpenValue={-40}
              previewOpenDelay={3000}
              useNativeDriver={false}
              rightOpenValue={-Dimensions.get('window').width / 4}
              renderHiddenItem={renderHiddenItem}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              data={isData}
              renderItem={renderItem}
            />
          </View>
        </ScrollViewComponent>
      </View>
    </Container>
  );
};


export default WishlistScreen;
