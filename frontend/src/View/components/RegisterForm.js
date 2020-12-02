import React, { useState } from 'react'
import { Grid, Divider, TextField, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import LoginButton from './LoginButton';
import { RegisterModel } from '../../ViewModel';

const RegisterForm = () => {
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
    registerModel.register().then((res) => {
      alert('회원가입 완료');
      console.log(res);
    }).catch((e) => {
      console.log(e);
    })
  }
  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
        회원가입
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={5} className='register_form_left'>
        이름
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' size='small' onChange={changeName}/>
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={5} className='register_form_left'>
        아이디
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' size='small' onChange={changeUserId}/>
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={5} className='register_form_left'>
        비밀번호
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' type='password' size='small' onChange={changeUserPw}/>
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={5} className='register_form_left'>
        비밀번호 확인
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' type='password' size='small' onChange={changeCheckPw}/>
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={5} className='register_form_left'>
        주소
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' size='small' onChange={changeAddress}/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid className='identification'>
        <RadioGroup row onChange={changeIdentity}>
          <FormControlLabel value={'staff'} control={<Radio />} label='직원'/>
          <FormControlLabel value={'guest'} control={<Radio />} label='손님'/>
        </RadioGroup>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={12} className='login_submit'>
        <LoginButton variant='contained' color='primary' className='login_button' onClick={register}>
          회원가입
        </LoginButton>
      </Grid>
    </Grid>
  );
}

export default RegisterForm;