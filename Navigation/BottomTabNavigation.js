/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TestScreen from '../Screens/TestScreen';
import ChatRoomScreen from '../Screens/ChatRoomScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from "../Screens/ProfileScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigation: () => Node = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name={'home'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="테스트"
        component={TestScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name={'list'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="채팅"
        component={ChatRoomScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name={'comments'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name={'info'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
