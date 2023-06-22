import {View, Text} from 'react-native';
import React from 'react';
import {
  Assets,
  Container,
  Header,
  Input,
  PrimaryButton,
  Validation,
} from 'utils/import.utils';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

const ResetPassword = (props: any) => {
  // hook form
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      confirmpassword: '',
      newpassword: '',
    },
    resolver: zodResolver(Validation.ResetPasswordValidation),
  });

  const resetPassword = () => {};
  return (
    <Container>
      <View className="px-5 mt-4 h-8">
        <Header
          onClick={() => props.navigation.goBack()}
          text={'Reset Password'}
          icon={Assets.arrow_left}
        />
      </View>
      <View className="px-5 mt-6">
        <Text className="text-xs font-merriweather text-secondary-black">
          Your new password must be different from your previous password
        </Text>
      </View>
      <View className="px-5 mt-6">
        <View>
          <Input
            label="New Password"
            control={control}
            style={'mb-4'}
            placeholder="New password"
            inputStyle={'placeholder:font-merriweather text-sm'}
            type={'text'}
            name={'newpassword'}
          />
        </View>
        <View>
          <Input
            label="Confirm Password"
            control={control}
            placeholder="Confirm password"
            inputStyle={'placeholder:font-merriweather text-sm'}
            type={'text'}
            name={'confirmpassword'}
          />
        </View>
        <View className="mt-8 h-14">
          <PrimaryButton
            text="Reset Passeword"
            onClick={() => handleSubmit(resetPassword)}
          />
        </View>
      </View>
    </Container>
  );
};

export default ResetPassword;
