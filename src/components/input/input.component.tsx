import {View, Text, TextInput, Alert} from 'react-native';
import React from 'react';
import {Assets, ImageComponent} from 'utils/import.utils';
import {Controller} from 'react-hook-form';
import {useSetState} from 'utils/functions.utils';
import _ from 'lodash';

interface IInput {
  name: string;
  label: string;
  style?: any;
  placeholder: string;
  icon?: any;
  type: any;
  inputStyle?: any;
  control: any;
  rules?: any;
}
const Input = (props: IInput) => {
  const [state, setState] = useSetState({});

  return (
    <>
      <View className={`w-full ${props.style}`}>
        <Controller
          name={props.name}
          rules={props.rules || {}}
          control={props.control}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
              <View
                className={`flex flex-row items-center justity-between px-4 bg-input-background rounded-lg h-14 ${
                  error && `border border-error`
                }`}>
                <View className="flex-1">
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    inputMode={props.type}
                    placeholder={props.placeholder}
                    className={`h-full rounded-lg ${props.inputStyle}`}
                  />
                </View>
                {props.icon && (
                  <View>
                    <ImageComponent
                      src={Assets.eye_open}
                      width={24}
                      height={24}
                    />
                  </View>
                )}
              </View>
              {error && (
                <Text className="text-sm font-merriweather text-error px-1 mt-1.5">
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </View>
    </>
  );
};

export default Input;
