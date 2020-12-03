import React, { useState, useEffect } from 'react'
import { Grid, Divider, TextField } from '@material-ui/core';
import { OrderModal, LoginButton } from '../components';

const OrderForm = (props) => {
  const { order, changeAddress, changeDetails, destructor, submitOrder } = props;
  const menus = order;

  const recipeList = () => {
    let result = [];
    let m;
    let s;
    let d;
    menus.map(element => {
      m = element.menu;
      s = element.style;
      d = element.dinner;
      result.push(
        <Grid item xs={12} type={'accum'}>
          <div className='orders'>{m} &nbsp;/ {s} / {d}</div>
        </Grid>
      );
    });
    return result;
  }
  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
        주문하기
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='order_form_left'>
        메뉴
      </Grid>
      <Grid item xs={7} className='order_form_right'>
        <OrderModal type={'menu_add_button'} destructor={destructor}></OrderModal>
      </Grid>
      {recipeList()}
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='order_form_left'>
        주소
      </Grid>
      <Grid item xs={7} className='order_form_right'>
        <TextField variant='outlined' size='small' onChange={changeAddress}/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='order_form_left'>
        요청사항
      </Grid>
      <Grid item xs={7} className='order_form_right'>
        <TextField variant='outlined' size='small' onChange={changeDetails}/>
      </Grid>
      <LoginButton variant='contained' color='primary' className='order_submit' onClick={submitOrder}>주문하기</LoginButton>
    </Grid>
  );
}

export default OrderForm;