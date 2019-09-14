import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import containers
import LoginContainer from './containers/LoginContainer';
import CategoriesContainer from './containers/CategoriesContainer/';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={LoginContainer} />
      <Route exact path='/categories' component={CategoriesContainer} />
    </Switch>
  </Router>
);

export default Routes;
