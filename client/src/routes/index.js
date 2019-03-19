import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Hoc/Layout';

import Home from '../components/Home';
import AddEditNote from '../components/AddEditNote';

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/notes/new" exact component={AddEditNote}/>
        <Route path="/notes/:id" exact component={AddEditNote}/>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Layout>

  )
}

export default Routes;
