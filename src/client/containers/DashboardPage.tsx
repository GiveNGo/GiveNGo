import React from 'react';

import { Layout, Divider, Text } from '@ui-kitten/components';
import TaskCard from '../components/TaskCard';

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
      <Layout
        style={{
          flex: 1,
          alignSelf: 'center',
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <Layout>
          <Text category='h6'>Current Tasks:</Text>
          <Divider />
          <TaskCard />
        </Layout>
        <Layout>
          <Text category='h6'>Current Requests:</Text>
          <Divider />
          <TaskCard />
        </Layout>
      </Layout>
    </Layout>
  );
}
