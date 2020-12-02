import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppView from '../AppView';

const Root = () => {
  return (
    <BrowserRouter>
      <AppView />
    </BrowserRouter>
  )
}

export default Root;
