import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { Link } from 'react-router-native';

const CodeOfConductPage = () => {
  return (
    <Layout>
      <Link to="/dashboard">
        <Button>in Code Of Conduct</Button>
      </Link>
    </Layout>
  );
};

export default CodeOfConductPage;
