import React from 'react';

import { StyleSheet } from 'react-native';

import { Card, Text } from '@ui-kitten/components';

import { TaskCardProps } from '../../types/types';

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  category,
  requester,
}) => {
  return (
    <Card style={styles.card} status='info'>
      <Text>
        Help {requester} with their request {title}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 1,
  },
});

export default TaskCard;
