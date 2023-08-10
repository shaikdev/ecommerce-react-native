import { View, Text } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import Assets from 'imports/asstes.imports';

interface ILottie {
    src: any
    width?:number,
    height?:number
}
const LottieComponent = (props: ILottie) => {
    return (
        <View className='w-full h-full justify-center items-center'>
            <Lottie style={{ width: props.width || 80, height: props.height || 80 }} autoPlay loop source={props.src} />
        </View>
    )
}

export default LottieComponent