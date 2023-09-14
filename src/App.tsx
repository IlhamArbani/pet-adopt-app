import { WelcomeScreen } from './screens';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <WelcomeScreen/>
    </SafeAreaView>
  );
}
