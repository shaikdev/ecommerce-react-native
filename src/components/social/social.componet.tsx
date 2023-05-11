import {View, Text} from 'react-native';
import React from 'react';
import { Assets, ImageComponent } from 'utils/import.utils';

interface ISocial {
    icon:any,
    onClick:Function,
}
const SocialComponent = () => {
  return (
    <View className="w-10 h-10 flex items-center justify-center bg-input-background rounded-2xl">
        {/* <ImageComponent width={30} height={30} src={Assets.Google}/> */}
    </View>
  );
};

export default SocialComponent;
