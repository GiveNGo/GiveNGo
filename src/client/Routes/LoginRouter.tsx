import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab} from '@ui-kitten/components';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';
import AboutUsPage from '../containers/AboutUs';

const Top = createMaterialTopTabNavigator();

const TopTabBar = (props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => {
  return(
    <TabBar
      selectedIndex={props.state.index}
      onSelect={index => props.navigation.navigate(props.state.routeNames[index])}>
      <Tab title='Login'/>
      <Tab title='Sign Up'/>
      <Tab title='About Us'/>
    </TabBar>
  )
};

export const LoginRouter = () => {
  return(
    <Top.Navigator tabBar={(props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => <TopTabBar {...props} />}>
      <Top.Screen name='Login' component={LoginPage}/>
      <Top.Screen name='Sign Up' component={SignupPage}/>
      <Top.Screen name='About Us' component={AboutUsPage}/>
    </Top.Navigator>
  )
};