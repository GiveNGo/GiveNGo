import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import * as types from '../Context/actionsTypes';
import { useStoreContext } from '../../../store';
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Context/actions';

const CodeOfConductPage = ({ navigation }: any) => {
  const [store, dispatch] = useStoreContext();
  const { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks } = store;
  return (
    <Layout>
      <Text>{`I ${userName} will be a good perso...`}</Text>
      <Button 
      onPress={() => navigation.navigate("Give'N'Go", { screen: 'Home' })}>Accept</Button>
    </Layout>
  );
};

export default CodeOfConductPage;
