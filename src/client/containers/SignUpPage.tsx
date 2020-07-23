import React, {useState, useEffect} from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Layout, Text, Input, Avatar, Divider } from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Reducer/actions';

const useInputState = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function SignUpPage({ navigation }: any): React.ReactElement {
  const store = useSelector(((state: any) => state.main))
  const dispatch = useDispatch()
  const [call, setCall] = useState(false);
  
  const userNameInputState = useInputState();
  const addressInputState = useInputState();
  const emailInputState = useInputState();
  const passwordInputState = useInputState();

  const auth = () => {
    // would fetch from database
    dispatch(setUserId('124'));
    dispatch(setUserName(userNameInputState.value));
    dispatch(setAnonymous(userNameInputState.value.toString()))
    dispatch(setEmail(emailInputState.value.toString()));
    dispatch(setAddress(addressInputState.value.toString()));
    setCall(true)
    
    
    navigation.navigate('Code of Conduct')
  }

  return (
    <Layout>
      <Image style={styles.image} source={require('../../../assets/logo.png')}/>
      <Input
        style={styles.input}
        status='info'
        size='medium'
        placeholder='Full Name'
        {...userNameInputState}
      />
      <Input
        style={styles.input}
        status='info'
        size='medium'
        placeholder='Email'
        {...emailInputState}
      />
      <Input
        style={styles.input}
        status='info'
        size='medium'
        placeholder='Delivery Address'
        {...addressInputState}
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
