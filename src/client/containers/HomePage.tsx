import React from 'react';
import { Layout, Divider, Text } from '@ui-kitten/components';
import TaskCard from '../components/TaskCard';
import RequestCard from '../components/RequestCard';

<<<<<<< HEAD:src/client/containers/DashboardPage.tsx
export default function DashboardPage() {
  const taskList = [
    {
      _id: 1,
      title: 'get milk',
      description: 'I need a gallon of whole milk.',
      category: 'groceries',
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
      title: 'get bread',
      description: 'I need a loaf of sliced whole wheat bread.',
      category: 'groceries',
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

=======
export default function HomePage() {
>>>>>>> 222da2f7902da8975c331587b06cdd95d0f6f471:src/client/containers/HomePage.tsx
  return (
    <Layout
      style={{
        flex: 1,
      }}
    >
      <Layout
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Layout>
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
};
