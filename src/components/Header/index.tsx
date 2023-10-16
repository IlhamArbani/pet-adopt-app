import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MainLogoHorizontal, NullProfile } from '@src/assets/images'

const Header = () => {
  return (
    <View className='flex-row items-center justify-between p-4'>
      <Image source={MainLogoHorizontal} className='h-10 w-36 mb-2'/>
      <TouchableOpacity>
        <Image source={NullProfile} className='h-10 w-10 rounded-full'/>
      </TouchableOpacity>
    </View>
  )
}

export default Header