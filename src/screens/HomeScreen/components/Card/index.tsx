import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@src/components'

const Card = () => {
  return (
    <View className='bg-black rounded-xl h-[124px] flex-row'>
      <View className='w-32 h-full bg-gray-primary rounded-xl'></View>
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