import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './View/pages';
import './View/css/style.css';

const AppView = () => {
  return (
    <>
      <div id='content'>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default AppView;