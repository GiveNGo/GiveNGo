import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export default function SignupPage({ navigation }: any): React.ReactElement {
  return (
    <Layout>
        <Button 
        status='success'
        onPress={() => navigation.navigate(' ')}>Sign Up</Button>
    </Layout>
  );
}
