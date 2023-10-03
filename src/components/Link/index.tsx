import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  text: string;
  onPress: () => void;
  textStyle: string;
}

const Link = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text className={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  )
}

Link.defaultProps = {
  textStyle: '',
}

export default Link