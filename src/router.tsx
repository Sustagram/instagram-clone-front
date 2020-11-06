import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import Login from './pages/Login';
import { MeProvider } from './hooks/useMe';
import PermissionRoute from './utils/Route/PermissionRoute';

const Router: React.FC = () => (
  <MeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <PermissionRoute exact path="/register" success={Register} failure={Register} />
        <PermissionRoute exact path="/login" success={Login} failure={Login} />
      </Switch>
    </BrowserRouter>
  </MeProvider>
);

export default Router;
