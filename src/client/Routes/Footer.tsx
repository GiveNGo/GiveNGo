import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { DashboardRouter } from './DashboardRouter';
import { ExploreRouter } from './ExploreRouter';
import { RequestRouter } from './RequestRouter';
import ExplorePage from '../containers/ExplorePage';
import RequestPage from '../containers/RequestPage';
import ChatPage from '../containers/ChatPage';
import ProfilePage from '../containers/ProfilePage';

const Bottom = createBottomTabNavigator();

const BottomTabBar = (props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => {
  return(
    <BottomNavigation
      selectedIndex={props.state.index}
      onSelect={index => props.navigation.navigate(props.state.routeNames[index])}>
      <BottomNavigationTab title='Home'/>
      <BottomNavigationTab title='Explore'/>
      <BottomNavigationTab title='Request'/>
      <BottomNavigationTab title='Chat'/>
      <BottomNavigationTab title='Profile'/>
    </BottomNavigation>
  )
};

export const Footer = () => {
  return (
    <Bottom.Navigator tabBar={(props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => <BottomTabBar {...props} />}>
      <Bottom.Screen name='Home' component={HomePage}/>
      <Bottom.Screen name='Explore' component={ExplorePage}/>
      <Bottom.Screen name='Request' component={RequestPage}/>
      <Bottom.Screen name='Chat' component={ChatPage}/>
      <Bottom.Screen name='Profile' component={ProfilePage}/>
    </Bottom.Navigator>
  )
};