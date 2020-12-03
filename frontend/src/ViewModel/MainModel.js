import { OrderModel } from '../Model';

class MainModel {
  constructor() {
    this.OrderModel = new OrderModel();
  }
  
  getPrevOrders() {
    return this.OrderModel.getPrevOrders();
  }
}

export default MainModel;