import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { RegisterForm } from '../components';
import { RegisterModel } from '../../ViewModel';


const Register = ({history}) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [address, setAddress] = useState('');
  const [identity, setIdentity] = useState(-1);
  

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeUserId = (e) => {
    setUserId(e.target.value)
  };
  const changeUserPw = (e) => {
    setUserPw(e.target.value);
  };
  const changeCheckPw = (e) => {
    setCheckPw(e.target.value);
  };
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };
  const changeIdentity = (e) => {
    setIdentity(e.target.value);
  }
  async function register() {
    if (name === '') { 
      alert('이름을 입력해주세요.') 
      return 
    }
    if (userId === '') {
      alert('아이디를 입력해주세요.')
      return 
    }
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
    const registerModel = new RegisterModel(name, userId, userPw, address, identity);
    const check = await registerModel.register();
    if (check !== undefined && check.status === 200) {
      alert('회원가입 완료');
      history.push('/login');
    }
  }
  return(
    <Grid>
      <RegisterForm 
      changeName={changeName}
      changeUserId={changeUserId}
      changeUserPw={changeUserPw}
      changeCheckPw={changeCheckPw}
      changeAddress={changeAddress}
      changeIdentity={changeIdentity}
      register={register} 
      />
    </Grid>
  );
}

export default Register;