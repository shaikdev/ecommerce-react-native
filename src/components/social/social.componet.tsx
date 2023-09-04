import {View, Text, Alert} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {onGoogleButtonPress} from 'utils/import.utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import _ from 'lodash';
import Models from 'imports/models.imports';
import {Failure, Success, useSetState} from 'utils/functions.utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ISocial {
  onClick?: Function;
  redirect: any;
  spinner?: any;
}
const SocialComponent = (props: ISocial) => {
  const [state, setState] = useSetState({
    loading: false,
  });
  const socialSign = async () => {
    try {
      props.spinner(true);
      const response = await onGoogleButtonPress();
      // alert(JSON.stringify(response))
      if (!_.isEmpty(response)) {
        const body = {
          name: response?.user?.displayName,
          email: response.user.email,
          profile: response?.user?.photoURL,
        };
        const res: any = await Models.auth.socialLogin(body);
        if (!_.isEmpty(res.data)) {
          await AsyncStorage.setItem('token', JSON.stringify(res.token));
          await AsyncStorage.setItem('user_id', res.data._id);
          Success('Success', 'Login successfully');
          props.spinner(false);
          props.redirect(true);
        } else {
          Failure('Failed', 'Login failed');
          props.spinner(false);
        }
      } else {
        Failure('Failed', 'Google login failed');
        props.spinner(false);
      }
    } catch (err: any) {
      Failure('Failed', 'Google login failed');
      props.spinner(false);
    }
  };
  return (
    <TouchableOpacity onPress={() => socialSign()}>
      <View className="w-9 h-9 bg-input-background rounded-2xl justify-center items-center">
        <ImageComponent width={24} height={24} svg src={Assets.Google} />
      </View>
    </TouchableOpacity>
  );
};

export default SocialComponent;
