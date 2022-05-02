import React from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import FirstScreen from '../Screens/FirstScreen';
import LogoScreen from '../Screens/LogoScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import RegisterFinishScreen from '../Screens/RegisterFinishScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PostScreen from '../Screens/PostScreen';

const Stack = createStackNavigator();

const RootStack: () => Node = () => {
  return (
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
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterFinish"
        component={RegisterFinishScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootStack;
