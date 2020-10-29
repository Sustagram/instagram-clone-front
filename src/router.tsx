import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { MeProvider } from './hooks/useMe';
import PermissionRoute from './utils/Route/PermissionRoute';

const Router: React.FC = () => (
  <MeProvider>
    <BrowserRouter>
      <Switch>
        <PermissionRoute exact path="/register" success={Register} failure={Register} />
        <PermissionRoute exact path="/login" success={Login} failure={Login} />
      </Switch>
    </BrowserRouter>
  </MeProvider>
);

export default Router;
