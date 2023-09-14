import { View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

type Props = {
  data: any;
  scrollX: any;
}

const SlidePagination = (props: Props) => {
  const {width} = useWindowDimensions();
  return (
    <View className='flex flex-row h-16'>
      {
        props.data.map((_: any, index: number) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

          const dotWidth = props.scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = props.scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          })

          return <Animated.View className='h-[10px] rounded-full bg-primary mx-2' style={{width: dotWidth, opacity}} key={index}/>
        })
      }
    </View>
  )
}

export default SlidePagination