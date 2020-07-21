import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { Link } from 'react-router-native';

const LoginPage = () => {
  return (
    <Layout>
      <Link to="/conduct">
        <Button>Sign Up</Button>
      </Link>
    </Layout>
  );
};

export default LoginPage;
