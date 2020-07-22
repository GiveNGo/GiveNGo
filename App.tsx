import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CodeOfConductPage from './src/client/containers/CodeOfConductPage';
import { Footer } from './src/client/Routes/Footer';
import { LoginRouter } from './src/client/Routes/LoginRouter';

// Kitten UI imports
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Stack = createStackNavigator();

export default function App({ navigation }: any) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginRouter} />
            <Stack.Screen name=' ' component={CodeOfConductPage} />
            <Stack.Screen name="Give'N'Go" component={Footer} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
