import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
// import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const DashboardPage = () => {
  return (
    <Layout>
      <NavBar />
      <Text>in Dashboard</Text>
      <Footer />
    </Layout>
  );
};

export default DashboardPage;
