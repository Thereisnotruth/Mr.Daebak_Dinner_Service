import { UserModel } from '../Model';

class RegisterModel {
  constructor(name, userId, userPw, address, identity) {
    this.UserModel = new UserModel(name, userId, userPw, address, identity);
  }
  register() {
    return this.UserModel.postRegister();
  }
}

export default RegisterModel;