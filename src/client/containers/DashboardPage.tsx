import React from 'react';

import { Layout, Divider, Text } from '@ui-kitten/components';
import TaskCard from '../components/TaskCard';
// import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

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
        <NavBar />
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
        <Footer />
      </Layout>
    </Layout>
  );
}
