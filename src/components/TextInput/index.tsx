import { View, Text, TextInput as Input, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { ICHidden, ICShow } from '@src/assets/icons';

type Props = {
  label: string;
  type: string;
  placeholder: string;
  icon: any;
  styleWarper: string;
}

type InputProps = Props & {
  isFocus: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const InputText = (props: InputProps) => {
  return (
    <View className={props.styleWarper}>
      <View className='flex items-start'>
        {props.label && <Text className={`-mb-[10px] ml-3 z-40 bg-white font-medium px-1`}>{props.label}</Text>}
      </View>
      <View className={`border-[1px] rounded-md py-[6px] px-2 flex-row items-center ${props.isFocus ? 'border-black' : 'border-gray-primary'}`} style={{columnGap:12}}>
        {props.icon && <props.icon/>}
        <Input placeholder={props.placeholder}  onFocus={props.onFocus} onBlur={props.onBlur} className='flex-1 h-auto'/>
      </View>
    </View>
  )
}

const InputPassword = (props: InputProps) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <View className={props.styleWarper}>
      <View className='flex items-start'>
        {props.label && <Text className={`-mb-[10px] ml-3 z-40 bg-white font-medium px-1`}>{props.label}</Text>}
      </View>
      <View className={`border-[1px] rounded-md py-[6px] px-2 flex-row justify-between items-center ${props.isFocus ? 'border-black' : 'border-gray-primary'}`}>
        <Input placeholder={props.placeholder} onFocus={props.onFocus} onBlur={props.onBlur} secureTextEntry={isShow} className='flex-1 mr-2 h-auto'/>
        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
          <Image source={isShow ? ICHidden : ICShow} className='w-5 h-5'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const TextInput = (props: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderInput = () => {
    switch(props.type){
      case 'password':
        return <InputPassword {...props} isFocus={isFocus} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}/>
      default:
        return <InputText {...props} isFocus={isFocus} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}/>
    }
  }
  return (
    <>
      {renderInput()}
    </>
  )
}

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  icon: null,
  styleWarper: ''
}

export default TextInput