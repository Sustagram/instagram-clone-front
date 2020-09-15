import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Router;
