import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Reducer/actions';

const TaskDetail = () => {
  const dispatch = useDispatch()
  const state = useSelector(((state: any) => state))
  return (
    <Layout>
      <Text>in TaskDetail</Text>
    </Layout>
  );
};

export default TaskDetail;
