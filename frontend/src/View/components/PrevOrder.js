import React from 'react'
import { Grid, Divider } from '@material-ui/core';

const PrevOrder = () => {
  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
        이전 주문 목록
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
    </Grid>
  );
}

export default PrevOrder;