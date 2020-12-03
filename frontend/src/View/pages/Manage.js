import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { OrderManagement } from '../components';
import { ManageModel } from '../../ViewModel';

const Manage = () => {
  const [orders, setOrders] = useState([]);
  const [time, setTime] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const manageModel = new ManageModel();
        const check = await manageModel.getAllOrders();
        if (check !== undefined && check.status === 200) {
          setOrders(check.data);
          console.log(orders)
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
      <OrderManagement
      orders={orders}
      />
    </Grid>
  );
}

export default Manage;