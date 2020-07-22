import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export default function SignupPage({ navigation }: any): React.ReactElement {
  return (
    <Layout>
      <View>
        {/* <Button onPress={() => navigation.navigate('Dashboard')}>Login</Button> */}
        <Button>Login</Button>
      </View>
    </Layout>
  );
}
