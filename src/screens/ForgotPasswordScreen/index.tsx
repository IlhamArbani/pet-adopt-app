import { View, Text, Image, ScrollView , StatusBar} from 'react-native'
import React from 'react'
import { MainLogoHorizontal } from '@src/assets/images'
import { ILCat } from '@src/assets/illustration'
import { Button, Link, Spacer, TextInput } from '@src/components'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Dimensions } from 'react-native';
import { ICLock } from '@src/assets/icons'

const ForgotPasswordScreen = () => {
  const {height} = Dimensions.get('window');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className='pb-6' style={{height: height - (StatusBar.currentHeight ?? 0)}}>
        <Image source={MainLogoHorizontal}  className='h-10 w-36 m-4 mb-2'/>
        <View className='px-7 flex-1 justify-center'>
          <Text className='text-3xl text-center font-bold'>Forgot Password?</Text>
          <View className='my-10 items-center'>
            <Image source={ICLock}/>
          </View>
          <Text className='text-center mb-6'>Enter your email addres here to receive further instructions.</Text>
          <TextInput placeholder='Type your email addres' label='Email'/>
          <Spacer height={24}/>
          <Button title='Send' onPress={() => {}} rounded='rounded-md' width='w-full'/>
        </View>
        <Text className='text-center text-gray-primary'>Pet Adoption App By codecraft</Text>
      </View>
    </ScrollView>
  )
}

export default ForgotPasswordScreen