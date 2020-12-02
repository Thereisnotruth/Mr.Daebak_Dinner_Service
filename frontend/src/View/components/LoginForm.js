import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Divider, TextField } from '@material-ui/core';
import LoginButton from './LoginButton';

const LoginForm = (props) => {
  const { changeUserId, changeUserPw, login } = props;
  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
          로그인
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={5} className='login_form_left'>
        아이디
      </Grid>
      <Grid item xs={7} className='login_form_right'>
        <TextField variant='outlined' onChange={changeUserId}/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='login_form_left'>
        비밀번호
      </Grid>
      <Grid item xs={7} className='login_form_right'>
        <TextField variant='outlined' type='password' onChange={changeUserPw}/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={12} className='login_submit'>
        <LoginButton variant='contained' color='primary' className='login_button' onClick={login}>
          로그인
        </LoginButton>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={12} className='login_submit'>
        <Link to='/register'>
          <LoginButton variant='contained' color='primary' className='login_button'>
            회원가입
          </LoginButton>
        </Link>
      </Grid>
    </Grid>
  );
}

export default LoginForm;