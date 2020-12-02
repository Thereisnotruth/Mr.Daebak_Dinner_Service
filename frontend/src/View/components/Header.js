import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Link to={'/main'} className='main_header'>
          Mr.대박 디너
        </Link>
      </Grid>
      <Grid item xs={12}>
        <div  className='main_subheader'>
          "특별한 날에 집에서 편안히 보내면서<br/> 
          당신의 남편, 아내, 엄마, 아버지, 또는 친구를 <br/>감동시켜라"<br/>
          - Mr.대박 -
        </div>
      </Grid>
    </Grid>
  );
}

export default Header;