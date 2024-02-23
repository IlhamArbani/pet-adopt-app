import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Spacer, TextInput } from '@src/components'
import ExploreCard from '@src/components/ExploreCard'
import { PETS } from '@src/dummyData'
import { ICArrowDown, ICExplore, ICFilter, ICLocation, ICSearch } from '@src/assets/icons'
import BottomSheet from '@gorhom/bottom-sheet';

const ExploreScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleShowFilter = () => {
    bottomSheetRef.current?.snapToIndex(1)
  }
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
          styleWarper='flex-1'
        />
        <TouchableOpacity
          onPress={handleShowFilter}
        >
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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{borderRadius:6, elevation:1}}
        enablePanDownToClose
        detached={true}
      >
        <View className='flex items-center'>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

export default ExploreScreen