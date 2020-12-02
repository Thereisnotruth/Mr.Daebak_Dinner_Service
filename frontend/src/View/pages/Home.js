import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Main, Login, Register, UserInfo, Order, Staff } from '../pages';
import { Header, Sidebar } from '../components';
import GetToken from '../../utils/GetToken';
import { LoginModel } from '../../ViewModel';

const Home = () => {
  const [update, setUpdate] = useState(false);
  const isLogin = GetToken('access_token');

  const logout = () => {
    const loginModel = new LoginModel();
    loginModel.logout();
    setUpdate(!update);
    window.location.href = '/main';
  }
  return ( 
    <>
      <Header />
      <Sidebar isLogin={isLogin} logout={logout}/>
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