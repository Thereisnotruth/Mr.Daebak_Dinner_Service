import React, { useState } from 'react'
import { Grid, Divider, TextField, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import LoginButton from './LoginButton';

const RegisterForm = (props) => {
  const { changeName, changeUserId, changeUserPw, changeCheckPw, changeAddress, changeIdentity, register } = props;
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