import { memo, useMemo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { SignInScreen, SignUpScreen } from '../screens';
import TabBar from './tab-bar'
const Tab = createBottomTabNavigator()
const transitionPresets = TransitionPresets.SlideFromRightIOS
function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        iconName = focused
          ? 'person'
          : 'ios-information-circle-outline';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'skyblue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
      <Tab.Screen name='邀请函' component={AuthStack}
         options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Ionicons
              name="ios-list"
              color="white"
              size={28}
              onPress={() => alert('This is a button!')}
            />
          ),
        }}/>
      <Tab.Screen name='相册' component={SignUpScreen} />
      <Tab.Screen name='导航' component={SignUpScreen} />
    </Tab.Navigator>
  )
}
const Stack = createStackNavigator()
const defaultScreenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'white'
  }
}
const RootStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      ...defaultScreenOptions,
      ...transitionPresets
    }}>
      <Stack.Screen name="bottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default memo(RootStack);
