import React from 'react';
import { NativeRouter, Route, Switch, BackButton } from 'react-router-native';

import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import ChatPage from './containers/ChatPage';
import CodeOfConductPage from './containers/CodeOfConductPage';
import DashboardPage from './containers/DashboardPage';
import ExplorePage from './containers/ExplorePage';
import ProfilePage from './containers/ProfilePage';
import RequestPage from './containers/RequestPage';

export default (props: any) => {
  return (
    <NativeRouter>
      <BackButton>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/request" component={RequestPage} />
          <Route path="/:user" component={ProfilePage} />
          <Route path="/messages" component={ChatPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/conduct" component={CodeOfConductPage} />
        </Switch>
      </BackButton>
    </NativeRouter>
  );
};
