import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Reducer/actions';

const CodeOfConductPage = ({ navigation }: any) => {
  const dispatch = useDispatch()
  const store = useSelector((state: any) => state.main)
  
  return (
    <Layout>
      <Text>{`I ${store.userName} will be a good person...`}</Text>
      <Button 
      onPress={() => navigation.navigate("Give'N'Go", { screen: 'Home' })}>Accept</Button>
      <Button 
      appearance='ghost'
      onPress={() => navigation.navigate('Sign Up')}>{`< Back`}</Button>
    </Layout>
  );
};

export default CodeOfConductPage;
