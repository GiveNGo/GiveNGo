import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../containers/HomePage';
import TaskDetail from '../containers/TaskDetail';

const Stack = createStackNavigator();

export const HomeRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomePage} />
      <Stack.Screen name='Task Detail' component={TaskDetail} />
    </Stack.Navigator>
  );
};
