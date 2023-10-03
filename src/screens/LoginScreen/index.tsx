import { View, Text, Image, ScrollView , StatusBar} from 'react-native'
import React from 'react'
import { MainLogo } from '@src/assets/images'
import { ILCat } from '@src/assets/illustration'
import { Button, Link, Spacer, TextInput } from '@src/components'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Dimensions } from 'react-native';

const LoginScreen = () => {
  const {height} = Dimensions.get('window');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{height: height - (StatusBar.currentHeight ?? 0)}}>
        <Image source={MainLogo}  className='h-24 w-24'/>
        <View className='flex items-center'>
          <Image source={ILCat} className='w-36 h-36'/>
        </View>
        <View className='px-7 pt-7 pb-4 shadow-2xl shadow-black bg-white rounded-t-2xl flex-1 justify-between'>
          <View>
            <Text className='font-bold text-xl'>Welcome Back</Text>
            <Text className='font-bold text-xl text-sky-400 mb-4'>Please sign in to continue</Text>
            <TextInput label='Email'/>
            <Spacer height={25}/>
            <TextInput label='Password'/>
            <View className='flex flex-row justify-between my-5'>
              <BouncyCheckbox
                size={16}
                text='Remember Me?'
                textStyle={{fontSize: 14, textDecorationLine: "none"}}
              />
              <Link onPress={() => {}} text='forgot password' textStyle='text-primary'/>
            </View>
            <Button title='Log In' onPress={() => {}} width='w-full' rounded='rounded-md'/>
          </View>
          <View className='flex flex-row justify-center'>
            <Text className='text-gray-primary mr-1'>Don't have any account?</Text>
            <Link textStyle='font-bold' text='Sign In' onPress={() => {}}/>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen