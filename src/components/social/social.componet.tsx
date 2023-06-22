import {View, Text} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {onGoogleButtonPress} from 'utils/import.utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ISocial {
  onClick?: Function;
}
const SocialComponent = (props: ISocial) => {
  return (
    <TouchableOpacity onPress={()=>onGoogleButtonPress()}>
      <View className="h-10 bg-input-background rounded-md">
        <View className="flex flex-row space-x-2 items-center justify-center flex-1">
          <View className='mt-1'>
            <ImageComponent width={22} height={22} svg src={Assets.Google} />
          </View>
          <View>
            <Text className="font-raleway-medium text-base text-secondary-black">
              Sign in with Google
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SocialComponent;
