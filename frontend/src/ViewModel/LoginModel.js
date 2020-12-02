import { UserModel } from '../Model';

class LoginModel {
  constructor(userData) {
    this.UserModel = new UserModel(userData);
  }

  postLogin() {
    this.UserModel.postLogin();
  }
}
export default LoginModel;