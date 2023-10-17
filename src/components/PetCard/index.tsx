import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { ICLocation, ICLove } from '@src/assets/icons'

type Props = {
  name: string
  age: string
  gender: string
  distance: number
}

const PetCard = (props: Props) => {
  const [isLoved, setIsLoved] = useState(false);
  return (
    <View className='w-[154px] min-h-[199px] bg-white rounded-xl border-[1px] border-gray-primary px-2 pt-2 pb-3'>
      <TouchableOpacity
        onPress={() => setIsLoved(!isLoved)}
        className='bg-white items-center justify-center rounded-full w-9 h-9 border-gray-secondary border-[1px] absolute z-50 left-[58px] -top-4'>
        <ICLove fill={isLoved ? '#FB003B' : '#DBDBDB'}/>
      </TouchableOpacity>
      <View className='w-[137px] h-[114px] bg-gray-primary mb-3 rounded-xl'></View>
      <View className='flex-row justify-between'>
        <Text className='text-primary text-lg font-bold'>{props.name}</Text>
        <View className='flex-row items-center'>
          <ICLocation fill={'#B9B0B0'}/>
          <Text className='text-gray-secondary text-xs font-medium ml-[2px]'>{props.distance}m</Text>
        </View>
      </View>
      <Text className='text-sm font-medium mt-3'>{props.age} | {props.gender}</Text>
    </View>
  )
}

export default PetCard