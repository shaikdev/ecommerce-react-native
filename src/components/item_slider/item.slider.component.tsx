import {View, Text, FlatList, Animated} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import Assets from 'imports/asstes.imports';
import {ImageComponent} from 'utils/import.utils';
import {height, useSetState, width} from 'utils/functions.utils';
import {ExpandingDot} from 'react-native-animated-pagination-dots';

interface IItemSlider {
  data:string[]
}
const ItemSliderComponent = (props:IItemSlider) => {
  // ref
  const flatListRef: any = useRef(null);

  // state
  const [state, setState] = useSetState({
    currentIndex: '',
  });

  const renderItem = (data: any) => {
    return (
      <View className="justify-center items-center">
        <ImageComponent
          resize="contain"
          width={width * 0.9}
          height={'90%'}
          src={data.item}
        />
      </View>
    );
  };
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const Separator = () => {
    return <View className="ml-8"></View>;
  };

  return (
    <View className="w-full h-full">
      <FlatList
        ref={flatListRef}
        style={{width: '100%'}}
        horizontal
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={'normal'}
        data={props.data}
        ItemSeparatorComponent={Separator}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={renderItem}
      />
      <View>
        <ExpandingDot
          data={props.data}
          expandingDotWidth={15}
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          activeDotColor="#689C36"
          dotStyle={{
            width: 6,
            height: 6,
            backgroundColor: '#ACADAC',
            borderRadius: 5,
            marginHorizontal: 5,
          }}
          containerStyle={{
            bottom: 20,
          }}
        />
      </View>
    </View>
  );
};

export default ItemSliderComponent;
