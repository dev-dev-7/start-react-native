import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../components/screens/SplashScreen';
import LoginScreen from '../components/screens/LoginScreen';
import ForgetPasswordScreen from '../components/screens/ForgetPasswordScreen';
import RegisterScreen from '../components/screens/RegisterScreen';
import LiveScreen from '../components/screens/LiveScreen';
import CreateAuctionScreen from '../components/screens/CreateAuctionScreen';
import TabStackScreen from './TabStackScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Live"
        component={LiveScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateAuction"
        component={CreateAuctionScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);
