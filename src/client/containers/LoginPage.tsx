import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import * as types from '../Context/actionsTypes';
import { useStoreContext } from '../../../store';
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Context/actions';

export default function LoginPage({ navigation }: any): React.ReactElement {
  const [store, dispatch] = useStoreContext();
  const { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks } = store;

  const auth = () => {
    // would fetch from database
    dispatch(setUserId('123'));
    dispatch(setUserName('Cherie Zhong'));
    dispatch(setAnonymous('Cherie Zhong'))
    dispatch(setEmail('cherie@codesmith.io'));
    dispatch(setAddress('3790 Wilshire Blvd, Los Angeles, CA 90010'));
    dispatch(setKarma(0));
    dispatch(setUserRequests([]));
    dispatch(setUserTasks([]));
    dispatch(setAppTasks([]));
    dispatch(setCurrentTask([]));
    
    navigation.navigate("Give'N'Go", { screen: 'Home' })
  }

  return (
    <Layout>
      <Button 
      onPress={auth}>Login</Button>
    </Layout>
  );
}
