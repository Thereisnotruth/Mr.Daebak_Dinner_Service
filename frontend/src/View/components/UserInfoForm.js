import React from 'react'
import { Grid, Divider, TextField } from '@material-ui/core';
import LoginButton from './LoginButton';

const UserInfoForm = () => {
  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
        회원정보
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={5} className='register_form_left'>
        이름
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        고태진
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='register_form_left'>
        아이디
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        paulo0614
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='register_form_left'>
        주소
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' size='small'/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='register_form_left'>
        비밀번호
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' type='password' size='small'/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='register_form_left'>
        비밀번호 확인
      </Grid>
      <Grid item xs={7} className='register_form_right'>
        <TextField variant='outlined' type='password' size='small'/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={12} className='login_submit'>
        <LoginButton variant='contained' color='primary' className='login_button'>
          확인
        </LoginButton>
      </Grid>
    </Grid>
  );
}

export default UserInfoForm;