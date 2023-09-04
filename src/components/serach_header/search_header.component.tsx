import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageComponent, SearchComponent} from 'utils/import.utils';

interface ISearchHeader {
  icon: any;
  placeholder: string;
  filter_icon: any;
  onClick: any;
  onFilterScreen: any;
  onChange:Function,
  value:string
}
const SearchHeaderComponent = (props: ISearchHeader) => {
  return (
    <View className="w-full h-full flex-row justify-between items-center space-x-3">
      <TouchableOpacity onPress={props.onClick}>
        <ImageComponent src={props.icon} svg width={24} height={24} />
      </TouchableOpacity>
      <View className="flex-1">
        <SearchComponent
          value={props.value}
          onChange={(value:string)=>props.onChange(value)}
          placeHolderTextColor={'#ACADAC'}
          placeholder={props.placeholder}
        />
      </View>
      <TouchableOpacity onPress={props.onFilterScreen}>
        <View className="h-14 w-14 bg-primary-green rounded-[10px] items-center justify-center">
          <ImageComponent src={props.filter_icon} svg width={24} height={24} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeaderComponent;
