import React from 'react';
// import { Link } from 'react-router-native';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

const Signout = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">Sign Out</Text>
  </Layout>
);

const Chat = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">Chat</Text>
  </Layout>
);

const User = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">User</Text>
  </Layout>
);

const NavBar = () => (
  <TabBar>
    <Link to="/">
      <Tab title="Signout" />
    </Link>
    <Link to="/messages">
      <Tab title="Chat" />
    </Link>
    <Link to="/user">
      <Tab title="User" />
    </Link>
  </TabBar>
);

export default NavBar;
