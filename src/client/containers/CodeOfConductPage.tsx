import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Reducer/actions';

const CodeOfConductPage = ({ navigation }: any) => {
  const dispatch = useDispatch()
  const userName = useSelector((state: { userName: any; }) => state.userName)
  // const { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks } = store;
  return (
    <Layout>
      <Text>{`I ${userName} will be a good perso...`}</Text>
      <Button 
      onPress={() => navigation.navigate("Give'N'Go", { screen: 'Home' })}>Accept</Button>
    </Layout>
  );
};

export default CodeOfConductPage;
