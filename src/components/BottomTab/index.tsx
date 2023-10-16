import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { ICExplore, ICHome, ICInbox, ICLiked } from '@src/assets/icons';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
}

const BottomTab = ({state, descriptors, navigation}: Props) => {
  const [activeScreen, setActiveScreen] = useState('HomeScreen');

  const translate = (label: string) => {
    switch(label){
      case 'ExploreScreen':
        return 'Explore';
      case 'LikedScreen':
        return 'Liked';
      case 'InboxScreen':
        return 'Inbox';
      default:
        return 'Home';
    }
  }

  const handleIcon = (label: string) => {    
    switch(label){
      case 'ExploreScreen':
        return <ICExplore fill={label === activeScreen ? '#FFFFFF' : '#B9B0B0'}/>;
      case 'LikedScreen':
        return <ICLiked fill={label === activeScreen ? '#FFFFFF' : '#B9B0B0'}/>;
      case 'InboxScreen':
        return <ICInbox fill={label === activeScreen ? '#FFFFFF' : '#B9B0B0'}/>;
      default:
        return <ICHome fill={label === activeScreen ? '#FFFFFF' : '#B9B0B0'}/>;
    }
  }

  return (
    <View style={{ flexDirection: 'row' }} className='px-7 h-20 items-center shadow-2xl shadow-black bg-white'>
      <View className='bg-primary w-32 h-10 flex-row items-center justify-center rounded-xl '>
        {handleIcon(activeScreen)}
        <Text className={`text-white ml-2`}>
          {translate(activeScreen)}
        </Text>
      </View>
      {state.routes.filter((item: any) => item.name !== activeScreen ).map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = activeScreen === label;

        const onPress = () => {
          setActiveScreen(label)
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            className='items-center flex-1'
          >
            {handleIcon(label)}
            <Text className={`${isFocused ? 'text-black' : 'text-gray-primary'}`}>
              {translate(label)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default BottomTab