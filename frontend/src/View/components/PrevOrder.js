import React from 'react'
import { Grid, Divider } from '@material-ui/core';

const PrevOrder = (props) => {
  const { prevOrders } = props;

  const prev = () => {
    let result = [];
    if (prevOrders !== null) {
      prevOrders.map(element => {
        result.push(
          <Grid item xs={6}>
            <div className='prev_orders'>
            {element.order} <br/>
            {element.Details}
            </div>
          </Grid>
        );
      });
    }
    return result;
  }
  return (
    <Grid container>
      <Grid item xs={2} className='divider'>
        이전 주문 목록
      </Grid>
      <Grid item xs={10}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      {prev()}
    </Grid>
  );
}

export default PrevOrder;