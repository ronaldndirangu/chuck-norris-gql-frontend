import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import containers
import LoginContainer from './containers/LoginContainer';
import CategoriesContainer from './containers/CategoriesContainer/';
import JokeContainer from './containers/JokeContainer';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={LoginContainer} />
      <Route exact path='/categories' component={CategoriesContainer} />
      <Route exact path='/joke' component={JokeContainer} />
    </Switch>
  </Router>
);

export default Routes;
