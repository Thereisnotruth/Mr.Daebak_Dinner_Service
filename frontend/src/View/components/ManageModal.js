import React, { useState } from 'react';
import { Modal, Button, Grid, Paper, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { LoginButton, SelectNum } from '../components';

const ManageModal = (props) => {
  const { destructor } = props;
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(-1);
  const [style, setStyle] = useState(-1);
  
  return (
    <Grid item xs={12}>
      <Button variant='contained' color='primary' className='order_manage_button'>
        주문
      </Button>
      <Modal>
        <Paper className='modal_con'>
        <Grid container>
          sdsd
        </Grid>
        </Paper>
      </Modal>
    </Grid>
  );
}

export default ManageModal;