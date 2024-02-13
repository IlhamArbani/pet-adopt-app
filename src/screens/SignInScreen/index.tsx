import { View, Text, Image} from 'react-native'
import React from 'react'
import { MainLogoHorizontal } from '@src/assets/images'
import { ILCat } from '@src/assets/illustration'
import { Button, Link, Spacer, TextInput } from '@src/components'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { ScreenNavigationProp } from '@src/types'

type Props = {
  navigation: ScreenNavigationProp<'SignInScreen'>
}

const SignInScreen = (props: Props) => {
  return (
      <View className='bg-white flex-1'>
        <Image source={MainLogoHorizontal}  className='h-10 w-36 m-4 mb-2'/>
        <View className='flex items-center'>
          <Image source={ILCat} className='w-36 h-36'/>
        </View>
        <View className='px-7 pt-7 pb-4 shadow-2xl shadow-black bg-white rounded-t-2xl flex-1 justify-between'>
          <View>
            <Text className='font-bold text-xl'>Welcome Back</Text>
            <Text className='font-bold text-xl text-sky-400 mb-4'>Please sign in to continue</Text>
            <TextInput label='Email'/>
            <Spacer height={25}/>
            <TextInput label='Password' type='password'/>
            <View className='flex flex-row justify-between my-5'>
              <BouncyCheckbox
                size={16}
                text='Remember Me?'
                textStyle={{fontSize: 14, textDecorationLine: "none"}}
              />
              <Link onPress={() => props.navigation.navigate('ForgotPasswordScreen')} text='forgot password' textStyle='text-primary'/>
            </View>
            <Button text='Log In' onPress={() => props.navigation.navigate('MainScreen')} size='full' rounded='rounded-md'/>
          </View>
          <View className='flex flex-row justify-center'>
            <Text className='text-gray-primary mr-1'>Don't have any account?</Text>
            <Link textStyle='font-bold' text='Sign Up' onPress={() => props.navigation.navigate('SignUpScreen')}/>
          </View>
        </View>
      </View>
  )
}

export default SignInScreen