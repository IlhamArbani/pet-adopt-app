import { WelcomeScreen } from './screens';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <LoginScreen/>
    </SafeAreaView>
  );
}
