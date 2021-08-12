import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

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
            options={{headerShown: false}}
          />
          <Stack.Screen name={pageConstants.Home} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
