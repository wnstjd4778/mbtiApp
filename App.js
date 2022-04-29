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
import {createStackNavigator} from '@react-navigation/stack';
import LogoScreen from './Screens/LogoScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import RegisterFinishScreen from './Screens/RegisterFinishScreen';
import TestScreen from './Screens/TestScreen';
import FirstScreen from './Screens/FirstScreen';
const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logo"
          component={LogoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegisterFinish" component={RegisterFinishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
