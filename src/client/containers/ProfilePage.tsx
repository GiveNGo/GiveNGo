import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import { ListItem, Button, Input, Toggle, Text, Card, Icon } from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux'
import { setAnonymous, setAddress, loginOut } from '../Reducer/actions';
import { cos } from "react-native-reanimated";


const StarColor = (props:any) => {
  const store = useSelector((state: any) => state.main)
  console.log('store att start color', store)
  let fill;
  if(!store.karma) fill = '#E4E9F2'
  if(store.karma > 0) fill = '#FFF3CD'
  if(store.karma > 4) fill = '#FFE49B'	
  if(store.karma > 7) fill = '#FFD169'	
  if(store.karma > 9) fill = '#FFBE43'	
  if(store.karma > 12) fill = '#FF9F05'
  if(store.karma > 15) fill = '#DB8003'
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


const Header = (props: any) => {
  const store = useSelector((state: any) => state.main)

  return (
  <View {...props}>
    <StarColor/>
    <Text category='h6'>{store.anonymous}</Text>
    <Text category='s1'>{`${store.karma} karma points`}</Text>
  </View>
  )
};

const Footer = (props:any) => {
  const dispatch = useDispatch()
  const store = useSelector((state: any) => state.main)
  const [activeChecked, setActiveChecked] = React.useState(false);

  const onActiveCheckedChange = (isChecked: React.SetStateAction<boolean>) => {
    setActiveChecked(isChecked);
    if(store.anonymous === 'Anonymous'){
      dispatch(setAnonymous(store.userName))
    } else {
      dispatch(setAnonymous('Anonymous'))
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
  const dispatch = useDispatch()
  const store = useSelector((state: any) => state.main)
  const [newAddress, setNewAddress] = useState(false)

  const postAddress = (value:string) => {
    dispatch(setAddress(value));
    return setNewAddress(false)
  }

  const ChangeAddress = () => (
    <Button 
    onPress={()=> setNewAddress(true)}
    appearance='outline' 
    size='tiny'>change</Button>
  );
  
  const out = () => {
    dispatch(loginOut())
    navigation.navigate("Login")
  }

  const DeleteAccount = () => (
    <Button
      // involk change delete account from database and redirect to login
      onPress={out}
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
        description={`${store.address}`}
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