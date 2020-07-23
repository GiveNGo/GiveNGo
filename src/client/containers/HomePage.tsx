import React from 'react';

import { StyleSheet } from 'react-native';

import { Layout, Divider, Text } from '@ui-kitten/components';
import TaskCard from '../components/TaskCard';
import RequestCard from '../components/RequestCard';

export default function HomePage() {
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
      description: 'I need a 50 pill container of tylenol',
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

  const testTasks = taskList.map((task) => {
    return (
      <TaskCard
        key={`task ${task._id}`}
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
          <Text category='h6'>Current Tasks:</Text>
          <Divider />
          {testTasks}
        </Layout>
        <Layout>
          <Text category='h6'>Current Requests:</Text>
          <Divider />
          <RequestCard />
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
  },
  tasks: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
