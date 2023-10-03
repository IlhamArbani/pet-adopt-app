import { View, Text, Image, ScrollView , StatusBar} from 'react-native'
import React from 'react'
import { MainLogoHorizontal } from '@src/assets/images'
import { ILCat } from '@src/assets/illustration'
import { Button, Link, Spacer, TextInput } from '@src/components'
import { Dimensions } from 'react-native';
import { ScreenNavigationProp } from '@src/types'

type Props = {
  navigation: ScreenNavigationProp<'SignUpScreen'>
}

const SignUpScreen = (props: Props) => {
  const {height} = Dimensions.get('window');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{height: height - (StatusBar.currentHeight ?? 0)}} className='bg-white'>
        <Image source={MainLogoHorizontal}  className='h-10 w-36 m-4 mb-2'/>
        <View className='flex items-center'>
          <Image source={ILCat} className='w-36 h-36'/>
        </View>
        <View className='px-7 pt-7 pb-4 shadow-2xl shadow-black bg-white rounded-t-2xl flex-1 justify-between'>
          <View>
            <Text className='font-bold text-xl'>Hello!</Text>
            <Text className='font-bold text-xl text-sky-400 mb-4'>Sign up to get started</Text>
            <TextInput label='Username'/>
            <Spacer height={25}/>
            <TextInput label='Email'/>
            <Spacer height={25}/>
            <TextInput label='Password' type='password'/>
            <Spacer height={20}/>
            <Button title='Sign Up' onPress={() => {}} width='w-full' rounded='rounded-md'/>
          </View>
          <View className='flex flex-row justify-center'>
            <Text className='text-gray-primary mr-1'>Already have an account?</Text>
            <Link textStyle='font-bold' text='Sign In' onPress={() => props.navigation.replace('SignInScreen')}/>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen