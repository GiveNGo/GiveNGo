import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
// import { Redirect } from 'react-router-native';

const LoginPage = () => {
  const handleOnPress = () => {
    <Redirect to="/conduct" />;
  };
  return (
    <Layout>
      <Button onPress={handleOnPress}>Sign Up</Button>
    </Layout>
  );
};

export default LoginPage;
