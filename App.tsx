import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/client/Routes';

// Kitten UI imports
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Routes />
      </ApplicationProvider>
    </>
  );
}
