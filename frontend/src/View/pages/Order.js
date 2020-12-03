import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { OrderForm } from '../components';
import GetToken from '../../utils/GetToken';
import { OrderViewModel } from '../../ViewModel';

const Order = ({history}) => {
  const [order, setOrder] = useState([]);
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [update, setUpdate] = useState(true)
  const accum = (menu, style, dinner) => {
    let tmp = order
    tmp.push({ menu, style, dinner });
    console.log(order);
    setUpdate(!update);
  }
  const isLogin = GetToken('access_token');
  if (isLogin === null) {
    alert('로그인이 필요합니다.');
    history.push('/login');
  }
  
  const changeOrder = (e) => {
    setOrder(e);
  }
  const changeAddress = (e) => {
    setAddress(e.target.value);
  }
  const changeDetails = (e) => {
    setDetails(e.target.value);
  }
  async function submitOrder() {
    let orderQuery = '';
    order.forEach(element => {
      orderQuery += element.menu + '/' + element.style + '/' + element.dinner + '\n'
    });
    console.log(orderQuery);
    const orderViewModel = new OrderViewModel(orderQuery, address, details);
    const check = await orderViewModel.order();
    if (check !== undefined) {
      if (check.status === 200) {
        alert('주문 완료');
        history.push('/main');
      }
    }
  }
  return(
    <Grid>
      <OrderForm
      order={order}
      changeOrder={changeOrder}
      changeAddress={changeAddress}
      changeDetails={changeDetails}
      destructor={accum}
      submitOrder={submitOrder}
      />
    </Grid>
  );
}

export default Order;