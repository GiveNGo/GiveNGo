import React from 'react';
import DashboardPage from './src/client/containers/DashboardPage';
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
<<<<<<< HEAD
        <DashboardPage />
=======
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signup" component={SignupPage} />
            <Stack.Screen name="Dashboard" component={DashboardPage} />
            <Stack.Screen name="ChatPage" component={ChatPage} />
            <Stack.Screen
              name="CodeOfConductPage"
              component={CodeOfConductPage}
            />
            <Stack.Screen name="ExplorePage" component={ExplorePage} />
            <Stack.Screen name="RequestPage" component={RequestPage} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
          </Stack.Navigator>
        </NavigationContainer>
>>>>>>> 8599a92ff1cfcf2b1f3449bcd5443389ede1fcde
      </ApplicationProvider>
    </>
  );
}
