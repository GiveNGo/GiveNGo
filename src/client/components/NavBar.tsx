import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab} from '@ui-kitten/components';
import LoginPage from '../containers/LoginPage';
import ChatPage from '../containers/ChatPage';
import ProfilePage from '../containers/ProfilePage';

const Top = createMaterialTopTabNavigator();

const TopTabBar = (props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => {
  return(
    <TabBar
      selectedIndex={props.state.index}
      onSelect={index => props.navigation.navigate(props.state.routeNames[index])}>
      <Tab title='Signout'/>
      <Tab title='Chat'/>
      <Tab title='User'/>
    </TabBar>
  )
};

export const NavBar = () => {
  return(
    <Top.Navigator tabBar={(props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => <TopTabBar {...props} />}>
      <Top.Screen name='Signout' component={LoginPage}/>
      <Top.Screen name='Chat' component={ChatPage}/>
      <Top.Screen name='User' component={ProfilePage}/>
    </Top.Navigator>
  )
};

// export const NavBar = () => {
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

// export default function NavBar({ navigation }: any): React.ReactElement {
//   return (
//     <Layout>
//         <ButtonGroup>
//           <Button onPress={() => navigation.navigate('Login')}>Signout</Button>
//           <Button onPress={() => navigation.navigate('Chat')}>Chat</Button>
//           <Button onPress={() => navigation.navigate('Profile')}>User</Button>
//         </ButtonGroup>
//     </Layout>
//   );
// }
