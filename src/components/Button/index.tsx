import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

type Props = {
  title: string,
  onPress: () => void,
  width: string,
  height: string,
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className={`bg-primary justify-center items-center rounded-full px-4 ${props.height} ${props.width}`}>
      <Text className='text-white font-bold text-lg'>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  width: 'w-32',
  height: 'h-12',
}

export default Button