import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen.js';
import QuizesScreen from '../screens/QuizesScreen.js';
import ChatScreen from '../screens/ChatScreen.js';
import EventsScreen from '../screens/EventsScreen.js';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#D64161',
            tabBarInactiveTintColor: '#fefefe',
            tabBarStyle: { backgroundColor: '#101820' },
            paddingBottom: 10,
        }}
        >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} />,
            }}
        />
        <Tab.Screen
            name="Events"
            component={EventsScreen}
            options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calendar" color={color} size={24} />,
            }}
        />
        <Tab.Screen
            name="Quizes"
            component={QuizesScreen}
            options={{
            tabBarLabel: 'Quizes',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={24} />,
            }}
        />
        <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chat" color={color} size={24} />,
            }}
        />
    </Tab.Navigator>
  );
}