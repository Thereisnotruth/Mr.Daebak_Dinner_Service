import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { UserInfoForm } from '../components';
import GetToken from '../../utils/GetToken';
import { UserInfoModel } from '../../ViewModel';

const UserInfo = ({history}) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [address, setAddress] = useState('');
  const [userPw, setUserPw] = useState('');
  const [checkPw, setCheckPw] = useState(''); 
  const [identity, setIdentity] = useState('');
  const isLogin = GetToken('access_token');

  async function init() {
    const userInfoModel = new UserInfoModel();
    if (isLogin === null) {
      alert('로그인이 필요합니다.');
      history.push('/login');
    }
    const info = await userInfoModel.getUserInfo();
    console.log(info);
    setName(info.data.name);
    setUserId(info.data.userId);
    setIdentity(info.data.identity);
  }
  const changeAddress = (e) => {
    setAddress(e.target.value);
  }
  const changeUserPw = (e) => {
    setUserPw(e.target.value);
  }
  const changeCheckPw = (e) => {
    setCheckPw(e.target.value);
  }
  async function modify() {
    console.log(checkPw, userPw);
    if (userPw === '') {
      alert('비밀번호를 입력해주세요.') 
      return
    }
    if (checkPw === '') {
      alert('비밀번호 확인을 입력해주세요.') 
      return 
    }
    if (userPw !== checkPw) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    if (address === '') {
      alert('주소를 입력해주세요.') 
      return 
    }
    const userInfoModel = new UserInfoModel(name, userId, userPw, address, identity);
    const check = await userInfoModel.modify();
    if (check !== undefined) {
      if (check.status === 200) {
        history.push('/main');
      }
    }
  }
  init();
  return(
    <Grid>
      <UserInfoForm
      changeAddress={changeAddress}
      changeUserPw={changeUserPw}
      changeCheckPw={changeCheckPw}
      modify={modify}
      name={name}
      userId={userId}
      />
    </Grid>
  );
}

export default UserInfo;