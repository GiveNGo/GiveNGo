import React from 'react';
import { View } from 'react-native';

import { Layout, Divider, Text } from '@ui-kitten/components';

export default function DashboardPage() {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white-ish',
      }}
    >
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <Text category='h6'>UI Kitten</Text>
        <Divider />
      </View>
    </Layout>
  );
}
