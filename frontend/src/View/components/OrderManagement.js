import React from 'react'
import { Grid, Divider } from '@material-ui/core';
import { ManageModal } from '../components';

const OrderManagement = () => {
  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
        주문 관리
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      <Grid item xs={12}><br/></Grid>
      <ManageModal></ManageModal>
    </Grid>
  );
}

export default OrderManagement;