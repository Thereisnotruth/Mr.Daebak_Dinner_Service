import React from 'react';
import { Route } from 'react-router-dom';
import { Main, Login, Register, UserInfo, Order, Staff } from '../pages';
import { Header, Sidebar } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='wrapper'> 
        <Route path='/main' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/userinfo' component={UserInfo} />
        <Route path='/order' component={Order} />
        <Route path='/staff' component={Staff} />
      </div>
    </>
  )
}

export default Home;