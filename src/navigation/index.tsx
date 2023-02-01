import { memo, useMemo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { Home, SignUpScreen } from '../screens';
import TabBar from './tab-bar'
const Tab = createBottomTabNavigator()
const transitionPresets = TransitionPresets.SlideFromRightIOS
function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        iconName = focused
          ? 'heart'
          : 'md-musical-note';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#396545',
      tabBarInactiveTintColor: 'gray',
    })}
  >
      <Tab.Screen name='邀请函' component={Home}
         options={{
          headerStyle: {
            backgroundColor: '#396545',
            borderColor: 'transparent',
            shadowColor: 'transparent'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <View style={{
              width: 30,
              height: 30,
              borderColor: 'white'
            }}>
              <Ionicons
              name="md-musical-note"
              onPress={() => alert('This is a button!')}
              color="#fff"
            />
            </View>
          ),
          headerTitleAlign: "center",
        }}/>
      <Tab.Screen name='地址导航' component={Home} />
      <Tab.Screen name='联系我们' component={SignUpScreen} />
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
