import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Icon } from '@ui-kitten/components';

import { RequestCardProps } from '../../types/types';

const RequestCard: React.FC<RequestCardProps> = ({
  title,
  description,
  category,
  requester,
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

export default RequestCard;
