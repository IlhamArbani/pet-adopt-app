import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <SignUpScreen/>
    </SafeAreaView>
  );
}
