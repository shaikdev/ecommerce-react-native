import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {
  Assets,
  Container,
  Functions,
  ImageComponent,
  Input,
  PrimaryButton,
  SocialComponent,
  Validation,
} from 'utils/import.utils';
import {useForm} from 'react-hook-form';
import {useSetState} from 'utils/functions.utils';
import {zodResolver} from '@hookform/resolvers/zod';
import {ScrollView} from 'react-native-gesture-handler';
import Models from 'imports/models.imports';
import {IRegister} from 'helper/interface.helper';

const Register = (props: any) => {
  // state
  const [state, setState] = useSetState({
    success: false,
  });

  const {
    handleSubmit,
    reset,
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

  const register = async (body: IRegister) => {
    try {
      delete body.confirmpassword;
      const res: any = await Models.auth.register(body);
      reset();
      setState({success: true});
      Functions.Success('Register successfully');
      setTimeout(() => {
        props.navigation.navigate('login');
      }, 1500);
    } catch (err: any) {
      Functions.Failure(err);
    }
  };

  return (
    <Container statusBarColor={state.success ? '#379237' : 'transparent'}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 40}}
        style={{height: '100%'}}>
        <View className="flex items-center pt-5">
          <Text className="text-3xl font-raleway-semi-bold text-secondary-black ">
            Sign Up
          </Text>
          <Text className="text-xs font-merriweather text-secondary-black pt-2">
            Fill the details and create your new account
          </Text>
        </View>
        <View className="px-5 pt-8">
          <View className="">
            <Input
              label="Email"
              style={'mb-4'}
              inputStyle={'placeholder:font-merriweather text-sm'}
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
              inputStyle={'placeholder:font-merriweather text-sm'}
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
              inputStyle={'placeholder:font-merriweather text-sm'}
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
              inputStyle={'placeholder:font-merriweather text-sm'}
              control={control}
              name="confirmpassword"
              placeholder="Confirm Password"
            />
          </View>
          <View className="h-14 mt-7">
            <PrimaryButton
              buttonStyle={'font-bold'}
              onClick={() => handleSubmit(register)}
              text="Sign Up"
            />
          </View>
          <View className="flex items-center justify-center mt-6">
            <Text className="font-merriweather text-xs text-secondary-black">
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
