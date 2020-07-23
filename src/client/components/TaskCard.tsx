import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Icon } from '@ui-kitten/components';

import { TaskCardProps } from '../../types/types';

const StarIcon = (props: any) => <Icon {...props} name='star' />;

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  category,
  requester,
}) => {
  return (
    <Button style={styles.button} appearance='ghost' accessoryLeft={StarIcon}>
      {requester} needs help: {description}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 1,
    alignSelf: 'flex-start',
  },
});

export default TaskCard;
