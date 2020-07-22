import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './src/client/containers/LoginPage';
import SignupPage from './src/client/containers/SignupPage';
import ChatPage from './src/client/containers/ChatPage';
import CodeOfConductPage from './src/client/containers/CodeOfConductPage';
import DashboardPage from './src/client/containers/DashboardPage';
import ExplorePage from './src/client/containers/ExplorePage';
import ProfilePage from './src/client/containers/ProfilePage';
import RequestPage from './src/client/containers/RequestPage';
import {Footer} from './src/client//components/Footer';
import {NavBar} from './src/client//components/NavBar';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Kitten UI imports
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


// const { Navigator, Screen } = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function App({ navigation }: any) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <NavBar/> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signup" component={SignupPage} />
            <Stack.Screen
              name="CodeOfConduct"
              component={CodeOfConductPage}
            />
            <Stack.Screen name="NavBar" component={NavBar} />
            <Stack.Screen name="Give'N'Go" component={Footer} />
            {/* <Stack.Screen name="Dashboard" component={DashboardPage} />
            <Stack.Screen name="Chat" component={ChatPage} />
            <Stack.Screen name="Explore" component={ExplorePage} />
            <Stack.Screen name="Request" component={RequestPage} />
            <Stack.Screen name="Profile" component={ProfilePage} /> */}
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Footer/> */}
      </ApplicationProvider>
    </>
  );
}
