import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from '@src/components'
import { AdoptTips } from '@src/assets/images'

const Card = () => {
  return (
    <View className='bg-black rounded-xl h-[124px] flex-row'>
      <Image source={AdoptTips} className='w-32 h-full rounded-xl'/>
      <View className='p-5 flex-1'>
        <Text className='text-white text-base'>Know all about adopting a pet here</Text>
        <View className='flex-1 items-end mt-2'>
          <Button
            size='sm'
            text='Click Here'
            onPress={() => {}}
            type='secondary'
          />
        </View>
      </View>
    </View>
  )
}

export default Card