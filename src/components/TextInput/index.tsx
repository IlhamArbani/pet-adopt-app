import { View, Text, TextInput as Input } from 'react-native'
import React, {useState} from 'react'

type Props = {
  label: string;
}

const TextInput = (props: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <View className='flex items-start'>
        <Text className={`-mb-[10px] ml-3 z-40 bg-white font-medium px-1`}>{props.label}</Text>
      </View>
      <View className={`border-[1px] rounded-md py-[6px] px-2 ${isFocus ? 'border-black' : 'border-gray-primary'}`}>
        <Input onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}/>
      </View>
    </View>
  )
}

export default TextInput