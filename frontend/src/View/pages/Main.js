import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Menu, PrevOrder } from '../components';
import { MainModel } from '../../ViewModel';

const Main = ({history}) => {
  const [prevOrder, setPrevOrder] = useState([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const mainModel = new MainModel();
        const check = await mainModel.getPrevOrders();
        console.log(check);
        if (check !== undefined && check.status === 200) {
          setPrevOrder(check.data);
          console.log(prevOrder)
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return(
    <Grid>
      <Menu />
      <br />
      <PrevOrder
      prevOrders={prevOrder}
      />
    </Grid>
  );
}

export default Main;