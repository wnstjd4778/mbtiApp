/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TestScreen from './Screens/TestScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();

const BottomTabNavigation: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabBarActiveTintColor: '#7DD421',
          tabBarInactiveTintColor: '#222222',
          style: {
            height: hp(10),
            borderTopWidth: hp(0.5),
            borderTopColor: '#E9E9E9',
            backgroundColor: '#FFFFFF',
          },
          iconStyle: {
            marginTop: hp(10),
          },
          tabBarLabelStyle: {
            fontFamily: 'NotoSansKR-Regular',
            fontSize: 30,
          },
        }}>
        <Tab.Screen
          name="Test"
          component={TestScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
