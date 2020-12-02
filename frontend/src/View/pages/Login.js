import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { LoginForm } from '../components';
import { LoginModel } from '../../ViewModel';

const Login = ({history}) => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const changeUserId = (e) => {
    console.log(e.target.value);
    setUserId(e.target.value);
  }
  const changeUserPw = (e) => {
    console.log(e.target.value);
    setUserPw(e.target.value);
  }
  async function login() {
    console.log(userId, userPw);
    const loginModel = new LoginModel(userId, userPw);
    const check = await loginModel.login();
    if (check !== undefined) {
      if (check.status === 200) {
        history.push('/main');
      } if (check.status === 404) {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      }
    }
  }
  return(
    <Grid>
      <LoginForm 
      changeUserId={changeUserId}
      changeUserPw={changeUserPw}
      login={login}
      />
    </Grid>
  );
}

export default Login;