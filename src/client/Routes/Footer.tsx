import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

import ExplorePage from '../containers/ExplorePage';
import RequestPage from '../containers/RequestPage';
import ChatPage from '../containers/ChatPage';
import ProfilePage from '../containers/ProfilePage';
import { HomeRouter } from './HomeRouter';

const Bottom = createBottomTabNavigator();

const HomeIcon = (props: any) => <Icon {...props} name='home-outline' />;
const ExploreIcon = (props: any) => <Icon {...props} name='map-outline' />;
const RequestIcon = (props: any) => <Icon {...props} name='gift-outline' />;
const ChatIcon = (props: any) => (
  <Icon {...props} name='message-square-outline' />
);
const ProfileIcon = (props: any) => <Icon {...props} name='person-outline' />;

const BottomTabBar = (
  props: JSX.IntrinsicAttributes & { navigation: any; state: any }
) => {
  return (
    <BottomNavigation
      selectedIndex={props.state.index}
      onSelect={(index) =>
        props.navigation.navigate(props.state.routeNames[index])
      }
    >
      <BottomNavigationTab icon={HomeIcon} title='Home' />
      <BottomNavigationTab icon={ExploreIcon} title='Explore' />
      <BottomNavigationTab icon={RequestIcon} title='Request' />
      <BottomNavigationTab icon={ChatIcon} title='Chat' />
      <BottomNavigationTab icon={ProfileIcon} title='Profile' />
    </BottomNavigation>
  );
};

export const Footer = () => {
  return (
    <Bottom.Navigator
      tabBar={(
        props: JSX.IntrinsicAttributes & { navigation: any; state: any }
      ) => <BottomTabBar {...props} />}
    >
      <Bottom.Screen name='Home' component={HomeRouter} />
      <Bottom.Screen name='Explore' component={ExplorePage} />
      <Bottom.Screen name='Request' component={RequestPage} />
      <Bottom.Screen name='Chat' component={ChatPage} />
      <Bottom.Screen name='Profile' component={ProfilePage} />
    </Bottom.Navigator>
  );
};
