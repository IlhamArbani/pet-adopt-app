import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Spacer, TextInput } from '@src/components'
import ExploreCard from '@src/components/ExploreCard'
import { PETS } from '@src/dummyData'
import { ICArrowDown, ICExplore, ICFilter, ICLocation, ICSearch } from '@src/assets/icons'

const ExploreScreen = () => {
  return (
    <View className='pb-[66px] bg-white'>
      <View className='p-4 flex-row justify-between'>
        <View className='flex-row items-center' style={{gap:4}}>
          <ICLocation fill='#FB8C00'/>
          <Text>Yogyakarta</Text>
          <ICArrowDown fill='#B9B0B0'/>
        </View>
        <View className='flex-row'>
          <Text className='text-primary'>Max Range : </Text>
          <Text className='font-bold'>500m</Text>
        </View>
      </View>
      <View className='px-4 mb-4 flex-row items-center' style={{gap:16}}>
        <TextInput
          icon={ICSearch}
          placeholder='Search pets'
        />
        <TouchableOpacity>
          <ICFilter/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={PETS}
        renderItem={({item}) => (
          <ExploreCard
            name={item.name}
            gender={item.gender}
            distance={item.distance}
            age={item.age}
            image={item.image}
          />
        )}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{gap: 12, justifyContent:'center', marginBottom: 12}}
      />
    </View>
  )
}

export default ExploreScreen