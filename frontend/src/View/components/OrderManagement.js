import React from 'react'
import { Grid, Divider } from '@material-ui/core';
import { ManageModal } from '../components';

const OrderManagement = (props) => {
  const { orders } = props;
  const orderList = () => {
    let result = [];
    let a;
    let d;
    let o;
    let t;
    let u;
    if (orders !== null) {
      orders.map(element => {
        console.log(element)
        a = element.address;
        d = element.details;
        o = element.orders;
        t = element.time;
        u = element.userId;
        result.push(
            <ManageModal
            address={a}
            details={d}
            orders={o}
            time={t}
            userId={u}
            ></ManageModal>
        );
      });
      return result;
   }
  }

  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
        주문 관리
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      <Grid item xs={12}><br/></Grid>
      {orderList()}
    </Grid>
  );
}

export default OrderManagement;