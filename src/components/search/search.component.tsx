import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {ImageComponent} from 'utils/import.utils';

interface ISearch {
  icon?: any;
  placeholder: string;
  placeHolderTextColor?: string;
  onChange:Function,
  value:string
}
const SearchComponent = (props: ISearch) => {
  return (
    <View className="h-full w-full bg-input-background rounded-[10px] px-3">
      <View className="flex flex-row justify-start items-center space-x-2">
        {props.icon && (
          <View>
            <ImageComponent svg src={props.icon} width={24} height={24} />
          </View>
        )}
        <View className="flex-1">
          <TextInput
           value={props.value}
           onChangeText={(value:string)=>props.onChange(value)}
            placeholderTextColor={props.placeHolderTextColor || '#000000'}
            placeholder={props.placeholder}
            className="h-full w-full text-[14px] text-secondary-black placeholder:font-merriweather placeholder:text-secondary-black placeholder:text-[14px]"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchComponent;
