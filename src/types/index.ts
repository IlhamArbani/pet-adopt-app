import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  SignInScreen: undefined,
  SignUpScreen: undefined,
  WelcomeScreen: undefined,
  ForgotPasswordScreen: undefined,
  MainScreen: undefined,
  HomeScreen: undefined,
  ExploreScreen: undefined,
  LikedScreen: undefined,
  InboxScreen: undefined,
}

export type ScreenNavigationProp<
  RouteName extends keyof RootStackParamList,
  ParamList extends RootStackParamList = RootStackParamList
> = StackNavigationProp<ParamList, RouteName>;