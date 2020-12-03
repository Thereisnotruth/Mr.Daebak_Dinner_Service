import React, { useState } from 'react';
import { Modal, Button, Grid, Paper, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { LoginButton, SelectNum } from '../components';

const ManageModal = (props) => {
  const { address, details, orders, userId, time } = props;
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(-1);
  const [style, setStyle] = useState(-1);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  return (
    <Grid item xs={12} type={'accum'}>
      <Button variant='contained' color='primary' className='order_manage_button' onClick={handleOpen}>
        {orders}
      </Button>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <Paper className='manage_modal_con'>
        <Grid container>
          <Grid item xs={12}><br /><br /></Grid>
          <Grid item xs={12} className='manage_modal_item'>
            아이디: {userId}
          </Grid>
          <Grid item xs={12}><br /></Grid>
          <Grid item xs={12} className='manage_modal_item'>
            주문내용: {orders}
          </Grid>
          <Grid item xs={12}><br /></Grid>
          <Grid item xs={12} className='manage_modal_item'>
            주소: {address}
          </Grid>
          <Grid item xs={12}><br /></Grid>
          <Grid item xs={12} className='manage_modal_item'>
            요청사항: {details}
          </Grid>
          <Grid item xs={12}><br /></Grid>
          <Grid item xs={12} className='manage_modal_item'>
            주문 시간: {time}
          </Grid>
          <Grid item xs={12}><br /><br /></Grid>
          <Grid item xs={12} className='manage_modal_item'>
            <Button variant='contained' color='primary'>배달</Button>
          </Grid>
        </Grid>
        </Paper>
      </Modal>
    </Grid>
  );
}

export default ManageModal;