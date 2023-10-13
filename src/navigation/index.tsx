import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExploreScreen, ForgotPasswordScreen, HomeScreen, InboxScreen, LikedScreen, SignInScreen, SignUpScreen, WelcomeScreen } from "@src/screens";

const Stack = createNativeStackNavigator();
const Tab =  createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="ExploreScreen" component={ExploreScreen} options={{headerShown: false}}/>
      <Tab.Screen name="LikedScreen" component={LikedScreen} options={{headerShown: false}}/>
      <Tab.Screen name="InboxScreen" component={InboxScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerShown: false}}/>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Navigation;