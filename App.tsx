import React, { useReducer} from 'react';
import { StoreContext } from './store';
import mainContext from './src/client/Context/mainContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Footer} from './src/client/Routes/Footer';
import { LoginRouter } from './src/client/Routes/LoginRouter';

// Kitten UI imports
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const initialState:{userId:string, userName:string, anonymous:string, email:string, address:string, karma:number, userRequests:object[], userTasks:object[], appTasks:object[], currentTask:object } = {
    userId:'', 
    userName:'',
    anonymous: '', 
    email:'', 
    address:'', 
    karma:0, 
    userRequests:[],
    userTasks:[], 
    appTasks:[],
    currentTask:{}
  };

const Stack = createStackNavigator();

export default function App({ navigation }: any) {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
      <StoreContext.Provider value={useReducer(mainContext, initialState)}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginRouter} />
            <Stack.Screen name="Give'N'Go" component={Footer} />
          </Stack.Navigator>
        </NavigationContainer>
        </StoreContext.Provider>
      </ApplicationProvider>
    </>
  );
}
