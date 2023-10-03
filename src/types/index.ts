import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  SignInScreen: undefined,
  SignUpScreen: undefined,
  WelcomeScreen: undefined,
  ForgotPasswordScreen: undefined,
}

export type ScreenNavigationProp<
  RouteName extends keyof RootStackParamList,
  ParamList extends RootStackParamList = RootStackParamList
> = StackNavigationProp<ParamList, RouteName>;