import React from 'react'
import { Grid, Divider } from '@material-ui/core';
import French from '../imgs/French.jpg';
import Valentine from '../imgs/Valentine.jpg';
import English from '../imgs/English.jpg';
import Champagne from '../imgs/Champagne.jpg';

const Menu = () => {
  return (
    <Grid container>
      <Grid item xs={1} className='divider'>
        메뉴
      </Grid>
      <Grid item xs={11}>
        <Divider variant='middle' className='divider_line'/>
      </Grid>
      <Grid item xs={3}>
        <Grid className='dinner_image'>
          <img src={Valentine} width='100%' height='100%' alt='Valentine' />
        </Grid>
        <Grid className='dinner_name'>
          Valentine
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid className='dinner_image'>
          <img src={French} width='100%' height='100%' alt='French' />
        </Grid>
        <Grid className='dinner_name'>
          French
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid className='dinner_image'>
          <img src={English} width='100%' height='100%' alt='English' />
        </Grid>
        <Grid className='dinner_name'>
          English
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid className='dinner_image'>
          <img src={Champagne} width='100%' height='100%' alt='Champagne' />
        </Grid>
        <Grid className='dinner_name'>
          Champagne Feast
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Menu;