import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Icon, Card } from '@ui-kitten/components';

import { TaskCardProps } from '../../types/types';

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  category,
  requester,
}) => {
  const iconMap = {
    grocery: 'shopping-cart-outline',
    pharmacy: 'thermometer-plus-outline',
    clothing: 'person-outline',
    pet: 'github-outline',
    household: 'home-outline',
    other: 'star-outline',
  };
  const icon = (props: any) => (
    <Icon {...props} name={`${iconMap[category]}`} />
  );
  return (
    <Button style={styles.button} accessoryLeft={icon} appearance='ghost'>
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
