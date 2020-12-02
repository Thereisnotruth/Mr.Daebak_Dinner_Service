import React, { useState, useEffect } from 'react'
import { Grid, Divider, TextField } from '@material-ui/core';
import { OrderModal, LoginButton } from '../components';

const OrderForm = () => {
  const [menus, setMenus] = useState([])
  const [update, setUpdate] = useState(false)

  const accum = (dinner, style, menu) => {
    let tmp = menus
    tmp.push({ menu, style, dinner })
    setMenus(tmp)
    setUpdate(!update)
  }

  useEffect(() => {
    console.log('test')
  }, [update]);

  const recipeList = () => {
    let result = [];
    let m;
    let s;
    menus.map(element => {
      if (element.menu === 0) {
        m = 'valentine';
      } else if(element.menu === 1) {
        m = 'french';
      } else if(element.menu === 2) {
        m = 'english';
      } else {
        m = 'champagne feast';
      }
      if (element.style === 0) {
        s = 'simple';
      } else if(element.style === 1) {
        s = 'grand';
      } else {
        s = 'deluxe';
      }
      result.push(
        <Grid item xs={12} className='orders'>
          {m} {s}
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
        <OrderModal destructor={accum}></OrderModal>
      </Grid>
      {recipeList()}
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='order_form_left'>
        주소
      </Grid>
      <Grid item xs={7} className='order_form_right'>
        <TextField variant='outlined' size='small'/>
      </Grid>
      <Grid item xs={12}><br /></Grid>
      <Grid item xs={5} className='order_form_left'>
        요청사항
      </Grid>
      <Grid item xs={7} className='order_form_right'>
        <TextField variant='outlined' size='small'/>
      </Grid>
      <LoginButton variant='contained' color='primary' className='order_submit'>주문하기</LoginButton>
    </Grid>
  );
}

export default OrderForm;