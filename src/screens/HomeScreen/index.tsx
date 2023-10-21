import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { ButtonIcon, Header, PetCard, Spacer } from '@src/components'
import { Card } from './components'
import { ICArrowLeft } from '@src/assets/icons'
import { PET_CATEGORIES } from '@src/constants'
import { PETS } from '@src/dummyData'

const HomeScreen = () => {
  return (
    <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false}>
      <Header/>
      <View className='px-4'>
        <Text className='text-primary text-xl font-bold'>Hello Ilham,</Text>
        <Text className='font-bold text-2xl mb-6'>Pets waiting for you</Text>
        <Card/>
        {/* START: pet categories */}
        <View className='flex-row justify-between items-center mt-7'>
          <Text className='text-lg font-bold'>Pet Categories</Text>
          <Image source={ICArrowLeft}/>
        </View>
        <View className='flex-row justify-between mt-4'>
          {
            PET_CATEGORIES.map((pet) => {
              return <ButtonIcon key={pet.title} icon={pet.icon} text={pet.title}/>
            })
          }
        </View>
        {/* END: pet categories */}
      </View>
      {/* START: pet nearby*/}
      <View className='flex-row justify-between items-center mt-7 px-4 mb-4'>
        <Text className='text-lg font-bold'>Pet Nearby</Text>
        <Image source={ICArrowLeft}/>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className='flex-row pt-4 gap-x-4'>
          <Spacer width={15}/>
          {
            PETS.map((pet) => (
              <View key={pet.id}>
                <PetCard image={pet.image} name={pet.name} age={pet.age} distance={pet.distance} gender={pet.gender}/>
              </View>
            ))
          }
          <Spacer width={15}/>
        </View>
      </ScrollView>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* the love button will be truncated when using FlatList, haven't found a solution yet*/}
      {/* <FlatList
        className='bg-yellow-300 pt-4'
        data={PETS}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <PetCard
              name={item.name}
              age={item.age}
              gender={item.gender}
              distance={item.distance}
            />
        )}
        ItemSeparatorComponent={() => <Spacer width={15}/>}
        ListHeaderComponent={() => <Spacer width={15}/>}
        ListFooterComponent={() => <Spacer width={15}/>}
      /> */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* END: pet nearby */}
      <Spacer height={16}/>
    </ScrollView>
  )
}

export default HomeScreen