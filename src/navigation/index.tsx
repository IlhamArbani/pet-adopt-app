import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPasswordScreen, SignInScreen, SignUpScreen, WelcomeScreen } from "@src/screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Navigation;