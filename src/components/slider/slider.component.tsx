import {View, Text, FlatList, Animated, Alert} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import Assets from 'imports/asstes.imports';
import {ImageComponent} from 'utils/import.utils';
import {
  Height,
  Width,
  height,
  useSetState,
  width,
} from 'utils/functions.utils';
import {ExpandingDot} from 'react-native-animated-pagination-dots';

const SliderComponent = () => {
  // ref
  const flatListRef: any = useRef(null);
  const images = [Assets.slider, Assets.slider, Assets.slider];

  // state
  const [state, setState] = useSetState({
    currentIndex: '',
  });

  const renderItem = (data:any) => {
    return (
      <View>
        <ImageComponent
          radius={10}
          resize="contain"
          width={width * 0.9}
          height={(width * height) / width}
          src={data.item}
        />
      </View>
    );
  };
  const scrollX = React.useRef(new Animated.Value(0)).current;
  // autoplay logic
  // let currentIndex;
  // let index = 0
  // const totalIndex = images.length - 1;
  // useEffect(() => {
  //   setInterval(() => {
  //   if (index === totalIndex) {
  //     flatListRef.current.scrollToIndex({animated: true, index: index});
  //      index = 0
  //   } else {
  //     flatListRef.current.scrollToIndex({animated: true, index: index});
  //     index++;
  //   }
  //   }, 4000);
  // }, [state.currentIndex]);

  // separate
  const Separator = () => {
    return <View className="ml-8"></View>;
  };


  return (
    <View className="w-full h-full">
      <FlatList
        ref={flatListRef}
        style={{width: '100%'}}
        // onMomentumScrollEnd={event => {
        // currentIndex = Math.floor(
        //     Math.floor(event.nativeEvent.contentOffset.x) /
        //       Math.floor(event.nativeEvent.layoutMeasurement.width),
        //   );
        //   setState({currentIndex})
        // }}
        horizontal
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={'normal'}
        data={images}
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
          data={images}
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
            top: 8,
          }}
        />
      </View>
    </View>
  );
};

export default SliderComponent;
