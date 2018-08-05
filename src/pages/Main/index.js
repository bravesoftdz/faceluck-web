import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../Login';
import Panel from '../Panel';
import PrivateRoute from '@/components/PrivateRoute';

const Main = () => (
  <Router>
    <Fragment>
      <PrivateRoute exact path="/" component={Panel} />
      <PrivateRoute path="/profile" component={Panel} />
      <PrivateRoute path="/users" component={Panel} />
      <PrivateRoute path="/feed" component={Panel} />
      <Route path="/login" component={Login} />
    </Fragment>
  </Router>
);

export default Main;
