import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Divider, Text } from '@ui-kitten/components';
import TaskCard from '../components/TaskCard';
import RequestCard from '../components/RequestCard';
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

export default function HomePage({ navigation }: any) {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const detailNav = () => {
    navigation.navigate('Home', { screen: 'Task Detail' });
  };

  const taskList = [
    {
      _id: 1,
      title: 'get milk',
      description: 'I need a gallon of whole milk.',
      category: 'grocery',
      requester: 'Cherie',
      assignee: 'Katty',
    },
    {
      _id: 2,
      title: 'get tylenol',
      description: 'I need a 50 pill container of tylenol.',
      category: 'pharmacy',
      requester: 'Vaughn',
      assignee: 'Katty',
    },
    {
      _id: 3,
      title: 'get kitty litter',
      description: 'I need a container of kitty litter for my cat Sparkles.',
      category: 'pet',
      requester: 'Spencer',
      assignee: 'Katty',
    },
  ];

  const requestList = [
    {
      _id: 4,
      title: 'get laundry detergent',
      description: 'I need a bottle of laundry detergent',
      category: 'household',
      requester: 'Marcus',
      assignee: 'Katty',
    },
    {
      _id: 5,
      title: 'get socks',
      description: "I need a pack of men's socks.",
      category: 'clothing',
      requester: 'Alan',
      assignee: 'Katty',
    },
    {
      _id: 6,
      title: 'get newspaper',
      description: "I need a copy of today's newspaper.",
      category: 'other',
      requester: 'Reid',
      assignee: 'Katty',
    },
  ];

  const userTasks = taskList.map((task) => {
    return (
      <TaskCard
        key={`task ${task._id}`}
        title={task.title}
        description={task.description}
        category={task.category}
        requester={task.requester}
        id={task._id}
        detailNav={detailNav}
      />
    );
  });

  const userRequests = requestList.map((task) => {
    return (
      <RequestCard
        key={`request ${task._id}`}
        title={task.title}
        description={task.description}
        category={task.category}
        requester={task.requester}
      />
    );
  });

  return (
    <Layout style={styles.outer}>
      <Layout style={styles.inner}>
        <Layout style={styles.tasks}>
          <Text category="h6">Current Tasks:</Text>
          <Divider />
          {userTasks}
        </Layout>
        <Layout>
          <Text category="h6">Current Requests:</Text>
          <Divider />
          {userRequests}
        </Layout>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 20,
  },
  tasks: {
    justifyContent: 'flex-start',
  },
});
