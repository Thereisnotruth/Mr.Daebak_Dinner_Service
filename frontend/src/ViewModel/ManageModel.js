import { OrderModel } from '../Model';

class ManageModel {
  constructor() {
    this.OrderModel = new OrderModel();
  }

  getAllOrders() {
    return this.OrderModel.getAllOrders();
  }

  done() {
    return this.OrderModel.done();
  }
}
export default ManageModel;