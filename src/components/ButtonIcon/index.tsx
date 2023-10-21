import { View, Text, Image, ImageProps } from 'react-native'
import React from 'react'

type Props = {
  icon: ImageProps,
  text: string,
}

const ButtonIcon = (props: Props) => {
  return (
    <View>
      <View className='w-[75px] h-[74px] shadow-lg shadow-black rounded-lg bg-white items-center justify-center'>
        <Image source={props.icon}/>
      </View>
      {
        props.text && <Text className='text-base font-bold mt-4 text-center'>{props.text}</Text>
      }
    </View>
  )
}

ButtonIcon.defaultProps = {
  text: '',
}

export default ButtonIcon