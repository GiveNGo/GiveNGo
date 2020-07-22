import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { DashboardRouter } from './DashboardRouter';
import { ExploreRouter } from './ExploreRouter';
import { RequestRouter } from './RequestRouter';

const Bottom = createBottomTabNavigator();

const BottomTabBar = (props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => {
  return(
    <BottomNavigation
      selectedIndex={props.state.index}
      onSelect={index => props.navigation.navigate(props.state.routeNames[index])}>
      <BottomNavigationTab title='Dashboard'/>
      <BottomNavigationTab title='Explore'/>
      <BottomNavigationTab title='Request'/>
    </BottomNavigation>
  )
};

export const Footer = () => {
  return (
    <Bottom.Navigator tabBar={(props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => <BottomTabBar {...props} />}>
      <Bottom.Screen name='User' component={DashboardRouter}/>
      <Bottom.Screen name='Donate' component={ExploreRouter}/>
      <Bottom.Screen name='Request' component={RequestRouter}/>
    </Bottom.Navigator>
  )
};