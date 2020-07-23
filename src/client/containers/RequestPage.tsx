import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Layout,
  Text,
  Input,
  Card,
  Radio,
  RadioGroup,
} from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserId,
  setUserName,
  setAnonymous,
  setEmail,
  setAddress,
  setKarma,
  setUserRequests,
  setUserTasks,
  setAppTasks,
  setCurrentTask,
} from '../Reducer/actions';

export default function RequestPage({ navigation }: any): React.ReactElement {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [request, setRequest] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const taskType: string[] = [
    'Grocery',
    'Pharmacy',
    'Clothing',
    'Household',
    'Pets',
    'Other',
  ];

  const addRequest = () => {
    fetch('/request', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskBody: request,
        taskType: taskType[selectedIndex],
        fulfilled: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('request submitted: ', data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    navigation.navigate("Give'N'Go", { screen: 'Home' });
  };

  useEffect(() => {
    addRequest();
  }, []);

  return (
    <Layout>
      <Text style={styles.text} category="h6">
        Submit your request for a donation from your neighbors!
      </Text>
      <Card style={styles.card}>
        <Input
          multiline={true}
          textStyle={{ minHeight: 100 }}
          placeholder="Enter your request..."
          value={request}
          onChangeText={(request) => {
            setRequest(request);
          }}
        />
        <Text style={{ marginTop: 8, marginBottom: 5 }} category="s1">
          Select the type of request:
        </Text>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index: number) => setSelectedIndex(index)}
        >
          <Radio>Grocery</Radio>
          <Radio>Pharmacy</Radio>
          <Radio>Clothing</Radio>
          <Radio>Household</Radio>
          <Radio>Pets</Radio>
          <Radio>Other</Radio>
        </RadioGroup>

        <Button
          style={{ marginTop: 10 }}
          size="small"
          status="primary"
          onPress={addRequest}
        >
          Submit
        </Button>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 2,
    height: '100%',
    borderColor: 'transparent',
  },
  text: {
    color: 'rgb(51, 102, 255)',
    marginTop: 20,
    margin: 10,
    textAlign: 'center',
  },
  radio: {
    fontSize: 12,
    fontWeight: '100',
  },
});
