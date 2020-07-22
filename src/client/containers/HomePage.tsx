import React from 'react';
import { Layout, Divider, Text } from '@ui-kitten/components';
import TaskCard from '../components/TaskCard';
import RequestCard from '../components/RequestCard';

export default function HomePage() {
  return (
    <Layout
      style={{
        flex: 1,
      }}
    >
      <Layout
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
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
          <RequestCard />
        </Layout>
      </Layout>
    </Layout>
  );
};
