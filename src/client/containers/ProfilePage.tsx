import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import { ListItem, Button, Input, Toggle, Text, Card, Icon } from '@ui-kitten/components';
import * as types from '../Context/actionsTypes';
import { useStoreContext } from '../../../store';
import { setUserId, setUserName, setAnonymous, setEmail, setAddress, setKarma, setUserRequests, setUserTasks, setAppTasks, setCurrentTask } from '../Context/actions';

let karma = 5
let userName = 'Cherie Zhong';
let anonymous = userName;
let address = '3790 Wilshire Blvd, Los Angeles, CA 90010'
// const [store, dispatch] = useStoreContext();
// const { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks } = store;

const StarColor = (props:any) => {
  let fill;
  if(karma < 1) fill = '#E4E9F2'
  if(karma > 0) fill = '#FFF3CD'
  if(karma > 4) fill = '#FFE49B'	
  if(karma > 7) fill = '#FFD169'	
  if(karma > 9) fill = '#FFBE43'	
  if(karma > 12) fill = '#FF9F05'
  if(karma > 15) fill = '#DB8003'
  return(
    <Icon {...props}
      width={32}
      height={32}
      fill={`${fill}`}
      name='star'/>
  )
}

const TrashIcon = (props: any) =>(
    <Icon {...props} name='trash-2-outline'/>
)


const Header = (props: any) => (
  <View {...props}>
    <StarColor/>
    <Text category='h6'>{anonymous}</Text>
    <Text category='s1'>{`${karma} karma points`}</Text>
  </View>
);

const Footer = (props:any) => {
  const [activeChecked, setActiveChecked] = React.useState(false);

  const onActiveCheckedChange = (isChecked: React.SetStateAction<boolean>) => {
    setActiveChecked(isChecked);
    if(anonymous === 'Anonymous'){
      // dispatch(setAnonymous(userName))
      anonymous = userName
      // involk change display to database
    } else {
      // dispatch(setAnonymous('Anonymous'))
      anonymous = 'Anonymous'
      // involk change display to database
    }
  };

  return (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Toggle
      style={styles.toggle}
      checked={activeChecked}
      onChange={onActiveCheckedChange}>
      Anonymous 
    </Toggle>
  </View>
  )
}

export default function  ProfilePage ({ navigation }: any){
  const [newAddress, setNewAddress] = useState(false)

  const postAddress = (value:string) => {
    // dispatch(setAddress(value));
    address = value
    return setNewAddress(false)
  }

  const ChangeAddress = () => (
    <Button 
    onPress={()=> setNewAddress(true)}
    appearance='outline' 
    size='tiny'>change</Button>
  );

  const DeleteAccount = () => (
    <Button
      // involk change delete account from database and redirect to login
      onPress={() => navigation.navigate("Login")}
      status='basic' 
      appearance='ghost' 
      accessoryLeft={TrashIcon}/>
  );

  const InputAddress = () => {
    const [value, setValue] = useState('');

    return (
      <Card>
      <Input
        placeholder='Write your address here...'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Button 
      onPress={()=> postAddress(value)}
      appearance='outline' 
      size='tiny'>Submit</Button>
      </Card>

    );
  }

  return (
    <React.Fragment>
    <Card style={styles.card} header={Header} footer={Footer}>
      {newAddress? <InputAddress/> : <ListItem
        title='Deliver Address'
        description={`${address}`}
        accessoryRight={ChangeAddress}
      />}
      <ListItem
        title='Delete Account'
        description='When your account is delete all your requests and tasks will be automatically canceled'
        accessoryRight={DeleteAccount}
      />
    </Card>
  </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  toggle: {
    margin: 2,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});