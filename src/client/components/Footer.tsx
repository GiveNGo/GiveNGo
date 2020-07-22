import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';

const Dashboard = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">Dashboard</Text>
  </Layout>
);

const Explore = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">Explore</Text>
  </Layout>
);

const Request = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">Request</Text>
  </Layout>
);

const Footer = () => (
  <BottomNavigation>
    <Link to="/dashboard">
      <BottomNavigationTab title="Dashboard" />
    </Link>
    <Link to="/explore">
      <BottomNavigationTab title="Explore" />
    </Link>
    <Link to="/request">
      <BottomNavigationTab title="Request" />
    </Link>
  </BottomNavigation>
);

export default Footer;
