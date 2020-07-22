// import React from 'react';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { TabBar, Tab} from '@ui-kitten/components';
// import ChatPage from '../containers/ChatPage';
// import ProfilePage from '../containers/ProfilePage';
// import RequestPage from '../containers/RequestPage';

// const Top = createMaterialTopTabNavigator();

// const TopTabBar = (props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => {
//   return(
//     <TabBar
//       selectedIndex={props.state.index}
//       onSelect={index => props.navigation.navigate(props.state.routeNames[index])}>
//       <Tab title='Welcome'/>
//       <Tab title='Chat'/>
//       <Tab title='User'/>
//     </TabBar>
//   )
// };

// export const RequestRouter = () => {
//   return(
//     <Top.Navigator tabBar={(props: JSX.IntrinsicAttributes & { navigation: any; state: any; }) => <TopTabBar {...props} />}>
//       <Top.Screen name='Request' component={RequestPage}/>
//       <Top.Screen name='Chat' component={ChatPage}/>
//       <Top.Screen name='User' component={ProfilePage}/>
//     </Top.Navigator>
//   )
// };
