import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Hoc/Layout';
import Auth from '../Hoc/Auth';

import Home from '../components/Home';

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home,null)}/>
      </Switch>
    </Layout>

  )
}

export default Routes;
