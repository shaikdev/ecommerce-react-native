import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageComponent, SearchComponent} from 'utils/import.utils';

interface ISearchHeader {
  icon: any;
  placeholder: string;
  filter_icon: any;
  onClick: any;
  onFilterClick?: Function;
}
const SearchHeaderComponent = (props: ISearchHeader) => {
  return (
    <View className="w-full h-full flex-row justify-between items-center space-x-3">
      <TouchableOpacity onPress={props.onClick}>
        <ImageComponent src={props.icon} svg width={24} height={24} />
      </TouchableOpacity>
      <View className="flex-1 h-[60px]">
        <SearchComponent
          placeHolderTextColor={'#ACADAC'}
          placeholder={props.placeholder}
        />
      </View>
      <View className="h-14 w-14 bg-primary-green rounded-[10px] items-center justify-center">
        <ImageComponent src={props.filter_icon} svg width={24} height={24} />
      </View>
    </View>
  );
};

export default SearchHeaderComponent;
