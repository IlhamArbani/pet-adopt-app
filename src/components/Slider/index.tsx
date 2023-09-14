import { View, FlatList, Animated} from 'react-native'
import React, { useRef } from 'react'
import SlideItem from '../SlideItem';
import { ILWelcome1, ILWelcome2, ILWelcome3 } from '@src/assets/illustration';
import SlidePagination from '../SlidePagination';

const Slider = () => {
  const data = [
    {
      id: '1',
      image: ILWelcome1,
      title: `Welcome to Adopt's`,
      description: 'Find the perfect feline friend for you. Together, we can provide a warm and loving home for cats in need.'
    },
    {
      id: '2',
      image: ILWelcome2,
      title: 'Easy to Search, Easy to Adopt',
      description: 'Browse by breed, age, color, and more. Every cat has a story, and you can be part of their next chapter.'
    },
    {
      id: '3',
      image: ILWelcome3,
      title: 'Become Part of the Community',
      description: 'Support adoption by joining our community. Share stories, tips, and cherish moments with your cat alongside other users.'
    },
  ];

  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View className='flex-1 items-center justify-center'>
      <FlatList
        data={data}
        renderItem={({item}) => <SlideItem description={item.description} image={item.image} title={item.title}/>}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          scrollX.setValue(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={32}
        ref={slideRef}
      />
      <SlidePagination data={data} scrollX={scrollX}/>
    </View>
  )
}

export default Slider