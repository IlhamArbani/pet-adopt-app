import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@src/components/Slider'
import { Button } from '@src/components'
import { ScreenNavigationProp } from '@src/types'

type Props = {
  navigation: ScreenNavigationProp<'WelcomeScreen'>
}

const WelcomeScreen = (props: Props) => {
  return (
    <View className='flex-1 justify-center items-center pb-4 bg-white'>
      <Slider/>
      <Button title='Start' onPress={() => props.navigation.replace('SignInScreen')}/>
    </View>
  )
}

export default WelcomeScreen