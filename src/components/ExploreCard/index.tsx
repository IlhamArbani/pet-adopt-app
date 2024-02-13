import { View, Text, ImageProps, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { ICLocation, ICLove } from '@src/assets/icons';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  name: string
  age: string
  gender: string
  distance: number,
  image: ImageProps,
}

const ExploreCard = (props: Props) => {
  const {
    image,
    name,
    age,
    gender,
    distance
  } = props;

  const [isLoved, setIsLoved] = useState(false);

  return (
    <ImageBackground source={image} className='h-[211px] w-40' imageStyle={{borderRadius:20}}>
      <LinearGradient
        colors={['transparent', '#0c0c0c']}
        start={{x:0.5,y:0.5}}
        className='rounded-[20px] py-3 px-4 flex-1 justify-end'
      >
        <TouchableOpacity
          onPress={() => setIsLoved(!isLoved)}
          className='bg-white items-center justify-center rounded-full w-9 h-9 border-gray-secondary border-[1px] absolute z-50 right-2 top-2'>
          <ICLove fill={isLoved ? '#FB003B' : '#DBDBDB'}/>
        </TouchableOpacity>
        <Text className='text-white font-bold text-xl'>{name}</Text>
        <Text className='text-white text-sm'>{age} | {gender}</Text>
        <View className='flex-row items-center' style={{gap: 2}}>
          <ICLocation fill={'#B9B0B0'}/>
          <Text className='text-gray-secondary text-xs'>{distance}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

export default ExploreCard