import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@src/components/Slider'
import { Button } from '@src/components'

const WelcomeScreen = () => {
  return (
    <View className='flex-1 justify-center items-center pb-4'>
      <Slider/>
      <Button title='Start' onPress={() => {}}/>
    </View>
  )
}

export default WelcomeScreen