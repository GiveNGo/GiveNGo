import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout } from '@ui-kitten/components';

const CodeOfConductPage = ({ navigation }: any) => {

  return (
    <Layout>
      <Button onPress={() => navigation.navigate('Dashboard')}>Login</Button>
    </Layout>
  );
};

export default CodeOfConductPage;
