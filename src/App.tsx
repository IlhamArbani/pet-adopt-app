import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}
