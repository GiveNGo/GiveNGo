import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';
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

const AboutUsPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white-ish',
      }}
    >
      <Card style={styles.card}>
        <Text category="p1" style={styles.text}>
          Give 'n' Go is here to connect people in need of basic goods with
          those who live nearby and are willing to donate and deliver those
          items.{'\n'}
          {'\n'}
          Our goal is to help build community while helping those in need. We
          hope that neighbors everywhere will use Give 'n' Go to support others
          in their neighborhood who are struggling to fulfill their basic needs
          due to illness, loss of job, change in childcare, or any other reason.
          This application is meant to make asking for what you need easy, and
          anyone nearby can help as little or as much as they are able to.
          {'\n'}
          {'\n'} Give what you can... and go!
        </Text>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 2,
    height: '100%',
    borderColor: 'transparent',
  },
  text: {
    textAlign: 'center',
  },
});

export default AboutUsPage;
