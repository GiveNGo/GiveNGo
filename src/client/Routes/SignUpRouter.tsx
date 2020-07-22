import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from '../containers/SignUpPage';
import CodeOfConductPage from '../containers/CodeOfConductPage';

const Stack = createStackNavigator();

export const SignUpRouter = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Sign Up' component={SignUpPage}/>
      <Stack.Screen name='Code of Conduct' component={CodeOfConductPage}/>
    </Stack.Navigator>
  )
};