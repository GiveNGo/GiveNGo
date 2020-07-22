import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './src/client/containers/LoginPage';
import SignupPage from './src/client/containers/SignupPage';
import ChatPage from './src/client/containers/ChatPage';
import CodeOfConductPage from './src/client/containers/CodeOfConductPage';
import DashboardPage from './src/client/containers/DashboardPage';
// import ExplorePage from './containers/ExplorePage';
// import ProfilePage from './containers/ProfilePage';
// import RequestPage from './containers/RequestPage';

// Kitten UI imports
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Stack = createStackNavigator();

export default function App({ navigation }: any) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signup" component={SignupPage} />
            <Stack.Screen name="Dashboard" component={DashboardPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
