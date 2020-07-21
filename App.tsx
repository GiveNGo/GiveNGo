import React from 'react';
import DashboardPage from './src/client/containers/DashboardPage';

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
        <DashboardPage />
      </ApplicationProvider>
    </>
  );
}
