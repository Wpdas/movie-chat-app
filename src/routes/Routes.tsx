import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from '@app/pages/Chat';
import Home from '@app/pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/chat/:title" component={Chat} />
      <Route path="/" component={Home} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
