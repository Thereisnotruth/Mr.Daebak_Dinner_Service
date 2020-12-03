import axios from 'axios';
import getCurrentDate from '../utils/CurrTime';

class OrderModel {
  constructor(order, address, details) {
    this.order = order;
    this.address = address;
    this.details = details;
  }
  postOrder() {
    const date = getCurrentDate();

    const check =  axios.post('/v1/order', {
      order: this.order,
      address: this.address,
      details: this.details,
      orderTime: date,
    });
    return check;
  }
  getPrevOrders() {
    const check = axios.get('/v1/order');

    return check;
  }
  getAllOrders() {
    const check = axios.get('/v1/manage');

    return check;
  }
  done(time) {
    const check = axios.post('/v1/manage/' + time);
    return check;
  }
}

export default OrderModel;