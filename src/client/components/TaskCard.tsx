import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Icon } from '@ui-kitten/components';

import { TaskCardProps } from '../../types/types';

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  description,
  category,
  requester,
  detailNav,
}) => {
  const iconMap = {
    grocery: 'shopping-cart-outline',
    pharmacy: 'thermometer-plus-outline',
    clothing: 'shopping-bag-outline',
    pet: 'github-outline',
    household: 'scissors-outline',
    other: 'heart-outline',
  };
  const icon = (props: any) => (
    <Icon {...props} name={`${iconMap[category]}`} />
  );
  return (
    <Button
      style={styles.button}
      accessoryLeft={icon}
      appearance='ghost'
      onPress={detailNav}
    >
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
