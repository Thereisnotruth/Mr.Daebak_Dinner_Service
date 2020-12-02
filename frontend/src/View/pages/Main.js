import React from 'react';
import { Grid } from '@material-ui/core';
import { Menu, PrevOrder } from '../components';

const Main = (props) => {
  return(
    <Grid>
      <Menu />
      <br />
      <PrevOrder />
    </Grid>
  );
}

export default Main;