import { View, Text, Image, ImageSourcePropType, useWindowDimensions } from 'react-native'
import React from 'react'

type Props = {
  image: ImageSourcePropType | null;
  title: string;
  description: string;
}

const SlideItem = ({image, title, description}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <View className='flex-1' style={{width}}>
      {
        image &&
        (
          <Image className='h-[300px] w-full' source={image}/>
        )
      }
      <View className='px-4'>
        <Text className='text-2xl font-bold mt-9 mb-1 text-center text-primary'>{title}</Text>
        <Text className='text-sm text-center text-gray-400'>{description}</Text>
      </View>
    </View>
  )
}

export default SlideItem