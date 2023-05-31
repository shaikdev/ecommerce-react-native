import {View, Text} from 'react-native';
import React from 'react';
import {ImageComponent} from 'utils/import.utils';
import {TextInput} from 'react-native-gesture-handler';

interface ISearch {
  icon?: any;
  placeholder: string;
}
const SearchComponent = (props: ISearch) => {
  return (
    <View className="h-full w-full bg-input-background rounded-[10px] px-3">
      <View className="flex flex-row justify-start items-center space-x-2">
        <View>
          <ImageComponent svg src={props.icon} width={24} height={24} />
        </View>
        <View className="flex-1">
          <TextInput
            placeholder={props.placeholder}
            className="h-full w-full text-[14px] text-secondry-black placeholder:font-merriweather placeholder:text-secondry-black placeholder:text-[14px]"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchComponent;
