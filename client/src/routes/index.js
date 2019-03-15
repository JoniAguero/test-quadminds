import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Hoc/Layout';
import Auth from '../Hoc/Auth';

import Home from '../components/Home';
import AddEditNote from '../components/AddEditNote';

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/notes/new" exact component={Auth(AddEditNote)}/>
        <Route path="/notes/:id" exact component={Auth(AddEditNote)}/>
        <Route path="/" exact component={Auth(Home)}/>
      </Switch>
    </Layout>

  )
}

export default Routes;
