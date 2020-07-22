import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
// import { Redirect } from 'react-router-native';

const CodeOfConductPage = () => {
  const handleOnPress = () => {
    <Redirect to="/dashboard" />;
  };
  return (
    <Layout>
      <Button onPress={handleOnPress}>in Code Of Conduct</Button>
    </Layout>
  );
};

export default CodeOfConductPage;
