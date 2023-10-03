import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  width: number;
  height: number;
};

const Spacer = (props: Props) => {
  return (
    <View style={{width: props.width, height: props.height}}>
    </View>
  )
}

Spacer.defaultProps = {
  width: 0,
  height: 0,
}

export default Spacer