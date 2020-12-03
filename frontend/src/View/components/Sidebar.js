import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Divider, Grid, Button, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { SidebarItem } from '../components';

const jwt = require('jsonwebtoken');

const Sidebar = (props) => {
  const { isLogin, logout } = props;
  const id = jwt.decode(isLogin)?.Identity;

  const OrderButton = withStyles((theme) => ({
    root: {
      backgroundColor: grey[700],
      '&:hover': {
        backgroundColor: grey[900],
      },
    },
  }))(Button);
  return (
    <Grid className='sidebar'>
      <Grid>
        <Link to={'/main'} className='sidebar_header'>Mr.대박 디너</Link>
      </Grid>
      <Divider variant='middle' />
        {
          (id==='staff')?
          <Grid>
            <Link to={'/manage'}>
              <SidebarItem
                name={'주문관리'}
              />
            </Link> 
          </Grid>
          :
          <Grid>
            <Link to={'/order'}>
              <SidebarItem
                name={'주문하기'}
              />
            </Link> 
          </Grid>
        }
        <Grid>
          <Link to={'/userinfo'}>
            <SidebarItem
              name={'내 정보'}
            />
          </Link> 
        </Grid>
      {
        (isLogin === null)?
          <Link to={'/login'} className='sidebar_login_link'>
            {
              
              <OrderButton variant='contained' color='primary' className='sidebar_login_button'>
                로그인
              </OrderButton>
              
            }
          </Link>
        :
        <OrderButton variant='contained' color='primary' className='sidebar_login_button' onClick={logout}>
          로그아웃
        </OrderButton>
      }
    </Grid>
  );
}

export default Sidebar;