import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout } from '@ui-kitten/components';

const CodeOfConductPage = ({ navigation }: any) => {

  return (
    <Layout>
      <Button 
      onPress={() => navigation.navigate("Give'N'Go", { screen: 'Home' })}>Accept</Button>
    </Layout>
  );
};

export default CodeOfConductPage;
