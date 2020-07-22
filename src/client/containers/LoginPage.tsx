import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export default function LoginPage({ navigation }: any): React.ReactElement {
  return (
    <Layout>
      <Button onPress={() => navigation.navigate(' ')}>Login</Button>
    </Layout>
  );
}
