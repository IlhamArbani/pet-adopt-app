import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

type Props = {
  text: string
  onPress: () => void
  rounded: string
  type: 'primary' | 'secondary'
  textStyle: string
  size: 'sm' | 'lg' | 'full'
}

const Button = (props: Props) => {
  const handleButtonSize = () => {
    switch(props.size){
      case 'sm':
        return 'w-[106px] h-7';
      case 'full':
        return 'w-full h-12';
      default:
        return 'w-32 h-12'
    }
  }

  const handleTextSize = () => {
    switch(props.size){
      case 'sm':
        return 'text-sm';
      default:
        return 'text-lg';
    }
  }

  const handleButtonType = () => {
    switch(props.type){
      case 'secondary':
        return 'bg-white';
      default:
        return 'bg-primary';
    }
  }

  const handleTextType = () => {
    switch(props.type){
      case 'secondary':
        return 'text-black';
      default:
        return 'text-white';
    }
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      className={`justify-center items-center px-4 ${props.rounded} ${handleButtonType()} ${handleButtonSize()}`}>
      <Text className={`font-bold ${handleTextSize()} ${handleTextType()} ${props.textStyle}`}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}



Button.defaultProps = {
  size: 'lg',
  rounded: 'rounded-full',
  type: 'primary',
  textStyle: ''
}

export default Button