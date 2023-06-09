import {View, Text, Alert, TouchableOpacity, ScrollView} from 'react-native';
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
  onGoogleButtonPress,
} from 'utils/import.utils';
import {useSetState} from 'utils/functions.utils';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Models from 'imports/models.imports';
import {ILogin} from 'helper/interface.helper';

const Login = (props: any) => {
  // state
  const [state, setState] = useSetState({
    success: false,
  });
  // hook form
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(Validation.loginSchema),
  });

  const handleLogin = async (body: ILogin) => {
    try {
      const res: any = await Models.auth.login(body);
      Functions.Sucess('Login successfully');
      setState({success: true});
      reset();
      setTimeout(() => {
        setState({success: false});
        props.navigation.navigate('home');
      }, 1500);
    } catch (err: any) {
      Functions.Failure(err);
    }
  };

  return (
    <Container statusBarColor={state.success ? '#379237' : 'transparent'}>
      <ScrollView
        style={{height: '100%'}}
        contentContainerStyle={{paddingBottom: 40}}>
        <View className="px-5 pt-2">
          <View className="flex items-center justify-center">
            <Text className="text-secondry-black text-3xl items-center font-raleway-semi-bold">
              Sign In
            </Text>
            <Text className="text-secondry-black text-xs font-merriweather pt-2">
              Fill the field below to Sign In
            </Text>
            <View className="mt-4">
              <ImageComponent
                svg
                width={229}
                height={250}
                src={Assets.login_illustrator}
              />
            </View>
          </View>
          <View className="mt-4">
            <Input
              control={control}
              style={'mb-4'}
              inputStyle={'placeholder:font-merriweather text-sm'}
              name="email"
              type={'text'}
              placeholder="Email"
              label={'email'}
            />
            <Input
              control={control}
              name="password"
              type={'text'}
              inputStyle={'placeholder:font-merriweather text-sm'}
              placeholder="Password"
              label={'email'}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('forgetpassword')}>
          <View className="flex items-end px-5 mt-3">
            <Text className="text-sm font-merriweather text-primary-green">
              Forgot Password?
            </Text>
          </View>
        </TouchableOpacity>
        <View className="flex h-14 px-5 mt-5">
          <PrimaryButton
            buttonStyle={'font-bold'}
            onClick={() => handleSubmit(handleLogin)}
            text="Sign In"
          />
        </View>
        <View className="mt-6 flex items-center">
          <Text className="font-merriweather text-xs text-secondry-black">
            Or Sign In with
          </Text>
        </View>
        <View className="w-1/2 m-auto mt-5">
          <SocialComponent />
        </View>
        <View
          className={`flex flex-col justify-start items-center flex-1 mt-8`}>
          <View className="flex flex-row justify-center items-center space-x-1">
            <Text className="font-merriweather text-xs text-gray-text">
              Do you don't have account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('register')}>
              <Text className="font-merriweather text-xs text-primary-green">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
