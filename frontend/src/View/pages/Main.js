import React from 'react';
import { Grid } from '@material-ui/core';
import { Menu, PrevOrder } from '../components';

const Main = ({history}) => {
  return(
    <Grid>
      <Menu />
      <br />
      <PrevOrder />
    </Grid>
  );
}

export default Main;