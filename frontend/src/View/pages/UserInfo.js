import React from 'react';
import { Grid } from '@material-ui/core';
import { UserInfoForm } from '../components';
import GetToken from '../../utils/GetToken';

const UserInfo = ({history}) => {
  const isLogin = GetToken('access_token');
  if (isLogin === null) {
    alert('로그인이 필요합니다.');
    history.push('/login');
  }
  return(
    <Grid>
      <UserInfoForm/>
    </Grid>
  );
}

export default UserInfo;