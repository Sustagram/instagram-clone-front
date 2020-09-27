import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { MeProvider } from './hooks/useMe';

const Router: React.FC = () => (
  <MeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </MeProvider>
);

export default Router;
