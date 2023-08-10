import {View} from 'react-native';
import React from 'react';
import {ImageComponent, Assets} from 'utils/import.utils';
import _ from 'lodash';
import {IProduct} from 'helper/interface.helper';

interface ICategory {
  data: any;
}
const CategorySearchComponent = (props: ICategory) => {
  return (
    <View className="flex-row space-x-5 items-center">
      {props.data &&
        props.data.map((item: IProduct, i: number) => {
          return (
            <View key={i}
              className={`w-[44px] h-[44px] items-center  justify-center border-2 rounded-lg border-input-background`}>
              <ImageComponent
                resize="cover"
                radius={8}
                src={item.cover_photo}
                width={36}
                height={36}
              />
            </View>
          );
        })}
    </View>
  );
};

export default CategorySearchComponent;
