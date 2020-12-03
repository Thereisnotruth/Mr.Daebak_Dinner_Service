import React from 'react';
import { Route } from 'react-router-dom';
import { Main, Login, Register, UserInfo, Order, Manage } from '../pages';
import { Header, Sidebar } from '../components';
import GetToken from '../../utils/GetToken';
import { LoginModel } from '../../ViewModel';

const Home = ({history}) => {
  const isLogin = GetToken('access_token');

  const logout = () => {
    const loginModel = new LoginModel();
    loginModel.logout();
    history.push('/main')
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
        <Route path='/manage' component={Manage} />
      </div>
    </>
  )
}

export default Home;