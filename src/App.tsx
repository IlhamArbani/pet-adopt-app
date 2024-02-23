import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className='flex-1'>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
