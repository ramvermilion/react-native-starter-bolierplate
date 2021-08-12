import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

import Navigation from '../src/components/Navigation';

import {pageConstants} from '../src/constants'

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="screen"
          screenOptions={({navigation}) => ({
            header: () => <Navigation navigation={navigation} />,
          })}>
          <Stack.Screen
            name={pageConstants.Login}
            component={LoginScreen}
            options={{headerShown: true}} //change to false for loginScreen
          />
          <Stack.Screen name={pageConstants.Home} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
