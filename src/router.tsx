import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import Login from './pages/Login';
import { MeProvider } from './hooks/useMe';
import PermissionRoute from './utils/Route/PermissionRoute';
import UploadPage from './pages/UploadPage';

const Router: React.FC = () => (
  <MeProvider>
    <BrowserRouter>
      <Switch>
        <PermissionRoute exact path="/" success={MainPage} failure={() => <Redirect to="/login" />} />
        <PermissionRoute exact path="/register" success={Register} failure={Register} />
        <PermissionRoute exact path="/login" success={() => <Redirect to="/" />} failure={Login} />
        <PermissionRoute exact path="/upload" success={UploadPage} failure={UploadPage} />
      </Switch>
    </BrowserRouter>
  </MeProvider>
);

export default Router;
