import {View, Text} from 'react-native';
import React from 'react';
import {
  Assets,
  Container,
  ImageComponent,
  Input,
  PrimaryButton,
  SocialComponent,
} from 'utils/import.utils';
import {useSetState} from 'utils/functions.utils';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

const Login = () => {
  // state
  const [state, setState] = useSetState({
    error: '',
  });

  // schema
  const loginSchema = z.object({
    email: z.string().nonempty('Email is required').email('Email is not valid'),
    password: z
      .string()
      .min(6, {message: 'Password must be 6 characters '})
      .nonempty('Password is required'),
  });

  // hook form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: any) => {};
  return (
    <Container>
      <View className="px-5 pt-2">
        <View className="flex items-center justify-center">
          <Text className="text-secondry-black text-3xl items-center font-raleway-semi-bold">
            Sign In
          </Text>
          <Text className="text-secondry-black text-xs font-merriweather pt-2">
            Fill the field below to Sign In
          </Text>
          <View className="pt-4">
            <ImageComponent
              width={229}
              height={250}
              src={Assets.login_illustrator}
            />
          </View>
        </View>
        <View className="pt-4">
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
      <View className="flex items-end px-5 pt-3">
        <Text className="text-sm font-merriweather text-primary-green">
          Forgot Password?
        </Text>
      </View>
      <View className="flex h-14 px-5 mt-5">
        <PrimaryButton
          buttonStyle={'font-bold'}
          onClick={() => handleSubmit(handleLogin)}
          text="Sign In"
        />
      </View>
      <View className="mt-5 flex items-center">
        <Text className="font-merriweather text-xs text-secondry-black">
          Or Sign In with
        </Text>
        <View>
          {/* do it later */}
          {/* <SocialComponent /> */}
        </View>
      </View>
    </Container>
  );
};

export default Login;
