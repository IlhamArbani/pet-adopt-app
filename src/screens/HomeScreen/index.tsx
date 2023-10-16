import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '@src/components'
import { Card } from './components'

const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white'>
      <Header/>
      <View className='px-4'>
        <Text className='text-primary text-xl font-bold'>Hello Ilham,</Text>
        <Text className='font-bold text-2xl mb-6'>Pets waiting for you</Text>
        <Card/>
        <View>
            
        </View>
      </View>
    </View>
  )
}

export default HomeScreen