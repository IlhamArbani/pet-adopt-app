import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { ForgotPasswordScreen } from './screens';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <ForgotPasswordScreen/>
    </SafeAreaView>
  );
}
