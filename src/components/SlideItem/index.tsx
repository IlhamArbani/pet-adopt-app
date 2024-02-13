import { View, Text, Image, ImageSourcePropType, useWindowDimensions } from 'react-native'
import React from 'react'

type Props = {
  image: ImageSourcePropType | null;
  title: string;
  description: string;
  id: string | number | null;
}

const SlideItem = ({image, title, description, id}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <View className='flex-1 justify-center items-center' style={{width}}>
      {
        image &&
        (
          <Image className={`${id == 1 ? 'h-[235px]' : 'h-[300px]'} w-full`} source={image}/>
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