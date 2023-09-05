import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

type Props = {
  title: string,
  onPress: () => void,
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className='bg-primary justify-center items-center h-12 rounded-full'>
      <Text className='text-white font-bold text-lg'>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button