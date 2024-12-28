import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import screens
import StartUpScreen from '../screens/StartUpScreen.js';
import InfoScreen from '../screens/InfoScreen.js';
import WelcomeScreen from '../screens/WelcomeScreen.js';
import RegisterScreen from '../screens/RegisterScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import BottomTabsNavigator from './BottomTabsNavigator.js';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartUp">
        <Stack.Screen 
          name="StartUp" 
          component={StartUpScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Info" 
          component={InfoScreen} 
          options={{ title: '', headerBackTitleVisible: false }}
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: '', headerBackTitleVisible: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Register', headerBackTitleVisible: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login', headerBackTitleVisible: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={BottomTabsNavigator} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
