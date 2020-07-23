import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Layout, Text, Input, Avatar, Divider } from '@ui-kitten/components';
import * as types from '../Context/actionsTypes';
import { useStoreContext } from '../../../store';
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Context/actions';

const useInputState = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function LoginPage({ navigation }: any): React.ReactElement {
  const [store, dispatch] = useStoreContext();
  const { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks } = store;
  const emailInputState = useInputState();
  const passwordInputState = useInputState();

  const auth = () => {
    // would fetch from database
    dispatch(setUserId('123'));
    dispatch(setUserName('Cherie Zhong'));
    dispatch(setAnonymous('Cherie Zhong'))
    dispatch(setEmail('cherie@codesmith.io'));
    dispatch(setAddress('3790 Wilshire Blvd, Los Angeles, CA 90010'));
    dispatch(setKarma(10));
    dispatch(setUserRequests([]));
    dispatch(setUserTasks([]));
    dispatch(setAppTasks([]));
    dispatch(setCurrentTask([]));
    
    navigation.navigate("Give'N'Go", { screen: 'Home' })
  }

  return (
    <Layout>
        <Image style={styles.image} source={require('../../../assets/logo.png')}/>
      <Input
        style={styles.input}
        status='info'
        size='medium'
        placeholder='Email'
        {...emailInputState}
      />

      <Input
        secureTextEntry={true}
        style={styles.input}
        status='info'
        size='medium'
        placeholder='Password'
        {...passwordInputState}
      />
      <Button 
      style={styles.button}
      onPress={auth}>Login</Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    alignSelf: 'center',
  },
  image: {
    marginVertical: 50,
    alignSelf: 'center',
  },
  input: {
    width: 300,
    alignSelf: 'center',
    marginVertical: 2,
  },
  title: {
    marginHorizontal: 8,
  },
});
