import { memo, useMemo } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SignInScreen, SignUpScreen } from '../screens';
import TabBar from './tab-bar'
const Tab = createBottomTabNavigator()
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // @ts-expect-error
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name='Discovery' component={SignInScreen} />
      <Tab.Screen name='User' component={SignUpScreen} />
    </Tab.Navigator>
  )
}
const Stack = createStackNavigator()
const AuthStack = () => {
  const theme = useTheme();
  const defaultScreenOptions = {
    cardStyle: {
      backgroundColor: 'white'
    }
  }
  let transitionPresets = TransitionPresets.SlideFromRightIOS
  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { contentStyle: { backgroundColor: theme.colors.white} };
  }, [theme.colors]);

  return (
    <Stack.Navigator
    screenOptions={{
      ...defaultScreenOptions,
      ...transitionPresets
    }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default memo(AuthStack);
