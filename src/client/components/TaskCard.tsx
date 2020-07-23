import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Icon, Card } from '@ui-kitten/components';

import { TaskCardProps } from '../../types/types';

const StarIcon = (props: any) => <Icon {...props} name='star' />;

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  category,
  requester,
}) => {
  return (
    <Button style={styles.button} accessoryLeft={StarIcon} appearance='ghost'>
      {requester} needs help: {description}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 1,
    justifyContent: 'flex-start',
    minWidth: 50,
  },
});

export default TaskCard;
