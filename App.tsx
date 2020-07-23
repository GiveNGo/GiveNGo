import React, { useReducer} from 'react';
import store from './store';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Footer} from './src/client/Routes/Footer';
import { LoginRouter } from './src/client/Routes/LoginRouter';

// Kitten UI imports
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

interface ProvidersProps { }

const Stack = createStackNavigator();

export default function App({ navigation }: any) {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginRouter} />
            <Stack.Screen name="Give'N'Go" component={Footer} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
      </Provider>
    </>
  );
}
