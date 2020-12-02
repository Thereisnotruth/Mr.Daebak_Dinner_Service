import axios from 'axios';

class OrderModel {
  constructor(order) {
    this.menu = order.menu;
    this.style = order.style;
    this.address = order.address;
    this.datail = order.detail;
  }
  postOrder() {
    this.order = axios.post('/v1/order/:id', {
      menu: this.menu,
      style: this.style,
      address: this.address,
      detail: this.detail,
    })
  }
}

export default OrderModel;