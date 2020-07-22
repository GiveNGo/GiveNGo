import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import DashboardPage from '../containers/DashboardPage';
import {NavBar} from '../components/NavBar';
import ExplorePage from '../containers/ExplorePage';
import RequestPage from '../containers/RequestPage';

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
      <Bottom.Screen name='User' component={NavBar}/>
      <Bottom.Screen name='Donate' component={ExplorePage}/>
      <Bottom.Screen name='Request' component={RequestPage}/>
    </Bottom.Navigator>
  )
};

// export const Footer = () => {
//   return(
//     <NavigationContainer>
//       <TabNavigator/>
//     </NavigationContainer>
//   )
// };

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View } from 'react-native';
// import { Button, ButtonGroup, Layout, Text } from '@ui-kitten/components';

// export default function Footer({ navigation }: any): React.ReactElement {
//   return (
//     <Layout>
//         <ButtonGroup>
//           <Button onPress={() => navigation.navigate('Dashboard')}>Dashboard</Button>
//           <Button onPress={() => navigation.navigate('Explore')}>Explore</Button>
//           <Button onPress={() => navigation.navigate('Request')}>Request</Button>
//         </ButtonGroup>
//     </Layout>
//   );
// }

