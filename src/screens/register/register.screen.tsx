import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Assets,
  Container,
  ImageComponent,
  Input,
  PrimaryButton,
  SocialComponent,
  Validation
} from 'utils/import.utils';
import {useForm} from 'react-hook-form';
import {useSetState} from 'utils/functions.utils';
import {zodResolver} from '@hookform/resolvers/zod';
import {ScrollView} from 'react-native-gesture-handler';

const Register = (props: any) => {
  // state
  const [state, setState] = useSetState({
    checkboxActive: false,
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmpassword: '',
    },
    resolver: zodResolver(Validation.registerSchema),
  });
  const register = () => {};
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{paddingBottom: 40}}
        style={{height: '100%'}}>
        <View className="flex items-center pt-2">
          <Text className="text-3xl font-raleway-semi-bold text-secondry-black ">
            Sign Up
          </Text>
          <Text className="text-xs font-merriweather text-secondry-black pt-2">
            Fill the details and create your new account
          </Text>
        </View>
        <View className="px-8 pt-8">
          <View className="">
            <Input
              label="Email"
              style={'mb-4'}
              type={'text'}
              control={control}
              name="email"
              placeholder="Email"
            />
          </View>
          <View className="">
            <Input
              label="Name"
              style={'mb-4'}
              type={'text'}
              control={control}
              name="name"
              placeholder="Name"
            />
          </View>
          <View className="">
            <Input
              icon={Assets.eye_open}
              label="password"
              style={'mb-4'}
              type={'text'}
              control={control}
              name="password"
              placeholder="Password"
            />
          </View>
          <View className="">
            <Input
              icon={Assets.eye_open}
              label="Confirm Password"
              type={'text'}
              control={control}
              name="confirmpassword"
              placeholder="Confirm Password"
            />
          </View>
          <View className="flex flex-row space-x-2 mt-4 mb-5 ">
            <TouchableOpacity
              onPress={() => setState({checkboxActive: !state.checkboxActive})}>
              <ImageComponent
                width={24}
                height={24}
                src={
                  state.checkboxActive
                    ? Assets.checkbox_enable
                    : Assets.checkbox_disbale
                }
              />
            </TouchableOpacity>
            <View className="flex flex-row items-center space-x-1">
              <View>
                <Text className="font-merriweather text-xs text-secondry-black">
                  I have read and agree to the
                </Text>
              </View>
              <Text className="font-merriweather text-xs text-primary-green">
                Privacy Policy
              </Text>
            </View>
          </View>
          <View className="h-14 mt-4">
            <PrimaryButton
              buttonStyle={'font-bold'}
              onClick={() => handleSubmit(register)}
              text="Sign Up"
            />
          </View>
          <View className="flex items-center justify-center mt-6">
            <Text className="font-merriweather text-xs text-secondry-black">
              Or Sign Up with
            </Text>
            <View className="mt-6">
              <SocialComponent />
            </View>
          </View>
        </View>
        <View className="flex flex-col justify-end items-center mt-10 ">
          <View className="flex flex-row justify-center items-center space-x-1">
            <Text className="font-merriweather text-xs text-gray-text">
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('login')}>
              <Text className="font-merriweather text-xs text-primary-green">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Register;
