import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
// import { Link } from 'react-router-native';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ChatPage = () => {
  return (
    <Layout>
      <NavBar />
      <Text>in Chat</Text>
      <Footer />
    </Layout>
  );
};

export default ChatPage;
