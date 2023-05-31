import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  Assets,
  Container,
  Header,
  ImageComponent,
  Input,
  PrimaryButton,
  Validation,
} from 'utils/import.utils';
import {useForm, Controller} from 'react-hook-form';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {zodResolver} from '@hookform/resolvers/zod';

const ForgetPasswordScreen = (props: any) => {
  // hook form
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(Validation.forgetPassword),
  });
  const forgetPassword = () => {
    props.navigation.navigate('resetpassword');
  };
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{paddingBottom: 30}}
        style={{height: '100%'}}>
        <View className="mt-5 mx-5 w-[30px]">
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <ImageComponent width={24} height={24} src={Assets.arrow_left} />
          </TouchableOpacity>
        </View>
        <View className="pt-3 flex justify-center items-center">
          <Text className="text-secondry-black font-raleway-semi-bold text-[28px]">
            Forgot Password
          </Text>
        </View>
        <View className="pt-4 flex justify-center items-center">
          <ImageComponent
            width={229}
            svg
            height={250}
            src={Assets.forgetpassword_illustrator}
          />
        </View>
        <View className="pt-4 px-5">
          <Text className="font-merriweather text-xs text-secondry-black">
            Enter your phone number to verify it’s you, and we will send you a
            one-time authorization code.
          </Text>
        </View>
        <View className="pt-5 px-5">
          <Input
            inputStyle={'placeholder:font-merriweather text-sm'}
            type={'text'}
            placeholder="Email"
            label="Email"
            name="email"
            control={control}
          />
        </View>
        <View className="px-5 mt-5 h-14">
          <PrimaryButton
            onClick={() => handleSubmit(forgetPassword)}
            text="Next"
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default ForgetPasswordScreen;
