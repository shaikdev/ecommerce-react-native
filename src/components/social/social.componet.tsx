import {View, Text} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';

interface ISocial {
  icon: any;
  onClick: Function;
}
const SocialComponent = () => {
  return (
    <View className="flex flex-row space-x-8 items-center justify-center  rounded-2xl">
      <View className="w-10 h-10 bg-input-background flex items-center justify-center rounded-2xl">
        <ImageComponent width={28} height={28} src={Assets.Facebook} />
      </View>

      <View className="w-10 h-10 bg-input-background flex items-center justify-center rounded-2xl">
        <ImageComponent width={28} height={28} src={Assets.Google} />
      </View>
      <View className="w-10 h-10 bg-input-background flex items-center justify-center rounded-2xl">
        <ImageComponent width={28} height={28} src={Assets.Apple} />
      </View>
    </View>
  );
};

export default SocialComponent;
