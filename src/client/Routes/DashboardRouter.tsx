import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab} from '@ui-kitten/components';
import ChatPage from '../containers/ChatPage';
import ProfilePage from '../containers/ProfilePage';
import DashboardPage from '../containers/DashboardPage';

const Top = createMaterialTopTabNavigator();

const TopTabBar = (props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => {
  return(
    <TabBar
      selectedIndex={props.state.index}
      onSelect={index => props.navigation.navigate(props.state.routeNames[index])}>
      <Tab title='Welcome'/>
      <Tab title='Chat'/>
      <Tab title='User'/>
    </TabBar>
  )
};

export const DashboardRouter = () => {
  return(
    <Top.Navigator tabBar={(props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => <TopTabBar {...props} />}>
      <Top.Screen name='Dashboard' component={DashboardPage}/>
      <Top.Screen name='Chat' component={ChatPage}/>
      <Top.Screen name='User' component={ProfilePage}/>
    </Top.Navigator>
  )
};