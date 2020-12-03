import { OrderModel } from '../Model';

class OrderViewModel {
  constructor(order, address, details) {
    this.OrderModel = new OrderModel(order, address, details);
  }
  
  order() {
    return this.OrderModel.postOrder();
  }
}

export default OrderViewModel;